import {useReducer} from 'react';
import init from 'Jooks';
import Reducer, * as reducerData from '../js/context/Reducer';
import Actions from '../js/constants/Actions';

jest.mock('../js/utilities/UUIDGeneration', () => {
  return (() => "test")
});

describe('Reducer tests', () => {
  const jooks = init(() => useReducer(Reducer, reducerData.initialState));

  it('Should add an object to the input list', () => {

  });
});
