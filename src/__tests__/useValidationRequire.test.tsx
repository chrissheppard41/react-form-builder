import init from "jooks";
import useValidationRequire from "../js/hooks/useValidationRequire";
import useActions from '../js/context/useActions';

const actions = useActions({}, () => {});

jest.mock('../js/context/FormContext', () => ({
  useStateValue: () => ({
    actions: {
      addValidation: () => jest.fn(),
      removeValidation: () => jest.fn()
    }
  }),
}));

describe('useValidationRequire hook tests', () => {
  it('Should not recognise what this validation is and no nothing', () => {
    const jooks = init(() => useValidationRequire({}, '', ''));
    const {message, require} = jooks.run();

    expect(message).toEqual('');
    expect(require).toEqual(false);
  });

  it('Should add the validation error to the list', () => {
    const jooks = init(() => useValidationRequire({
      required: {
        enabled: true,
        message: 'lorem ipsum'
      }
    }, '', ''));
    const {message, require} = jooks.run();

    expect(message).toEqual('lorem ipsum');
    expect(require).toEqual(true);
  });

  it('Should remove the validation error to the list', () => {
    const jooks = init(() => useValidationRequire({
      required: {
        enabled: true,
        message: 'lorem ipsum'
      }
    }, 'lorem ipsum', ''));
    const {message, require} = jooks.run();

    expect(message).toEqual('');
    expect(require).toEqual(true);
  });

  it('Should not do anything if it can\'t find the component', () => {
    const jooks = init(() => useValidationRequire({
      unknown: {
        enabled: true,
        message: 'lorem ipsum'
      }
    }, '', ''));
    const {message, require} = jooks.run();

    expect(message).toEqual('');
    expect(require).toEqual(false);
  });

  it('Should not do anything if the component is disabled', () => {
    const jooks = init(() => useValidationRequire({
      required: {
        enabled: false
      }
    }, '', ''));
    const {message, require} = jooks.run();

    expect(message).toEqual('');
    expect(require).toEqual(false);
  });
});
