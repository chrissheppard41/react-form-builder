import init from "jooks";
import useValidationRequire from "../js/hooks/useValidationRequire";
import useActions from "../js/context/useActions";

const actions = useActions({}, () => {});

jest.mock("../js/context/FormContext", () => ({
  useStateValue: () => ({
    actions: {
      addValidation: () => jest.fn(),
      removeValidation: () => jest.fn()
    }
  })
}));

const addValidation = jest.fn();
const removeValidation = jest.fn();
const requireCheck = (
  value: string,
  messageCompare: string,
  enabledCompare: boolean
) => {
  const jooks = init(() =>
    useValidationRequire(
      {
        required: {
          enabled: enabledCompare,
          message: "lorem ipsum"
        }
      },
      value,
      "id",
      addValidation,
      removeValidation
    )
  );
  const { requiredMessage, require } = jooks.run();

  expect(requiredMessage).toEqual(messageCompare);
  expect(require).toEqual(enabledCompare);
};

describe("useValidationRequire hook tests", () => {
  it("Should not recognise what this validation is and no nothing", () => {
    const jooks = init(() =>
      useValidationRequire({}, "", "", addValidation, removeValidation)
    );
    const { requiredMessage, require } = jooks.run();

    expect(requiredMessage).toEqual("");
    expect(require).toEqual(false);
  });

  it("Should add the validation error to the list", () => {
    requireCheck("", "lorem ipsum", true);
  });

  it("Should remove the validation error to the list", () => {
    requireCheck("lorem ipsum", "", true);
  });

  it("Should not do anything if it can't find the component", () => {
    const jooks = init(() =>
      useValidationRequire(
        {
          unknown: {
            enabled: true,
            message: "lorem ipsum"
          }
        },
        "",
        "",
        addValidation,
        removeValidation
      )
    );
    const { requiredMessage, require } = jooks.run();

    expect(requiredMessage).toEqual("");
    expect(require).toEqual(false);
  });

  it("Should not do anything if the component is disabled", () => {
    requireCheck("", "", false);
  });
});
