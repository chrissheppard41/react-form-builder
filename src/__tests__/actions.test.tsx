import init from 'Jooks';
import {initialState} from '../js/context/Reducer';
import useActions from '../js/context/useActions';

describe('Reducer tests', () => {
  const jooks = init(() => useActions(initialState, jest.fn((action) => action)));

  it('Should call the add input function', () => {
    const {addInput} = jooks.run();

    expect(addInput({lorem: 'ipsum'})).toEqual({type: 'ADD_INPUT', payload: {InputData: {lorem: 'ipsum'}}});
  });

  it('Should call the move input function', () => {
    const {moveInput} = jooks.run();

    expect(moveInput(0, 1)).toEqual({type: 'ALL_INPUT', payload: {InputData: {}}});
  });

  it.skip('Should move the input from position 0 to position 1', () => {
    const {moveInput} = jooks.run();

    expect(moveInput(0, 1)).toEqual({type: 'ALL_INPUT', payload: {InputData: {}}});
  });
});
