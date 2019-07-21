import React, {createContext, useReducer, useContext} from 'react';
import useActions from '../context/useActions';
import Reducer, {initialState} from './Reducer';
import { inputTypes } from '../types/inputType';

export const FormContext = createContext({});

type Props = {
    children: any,
    formData: inputTypes
};

const FormProvider = ({children, formData}: Props) => {
  let newState: any = initialState;
    if (Object.keys(formData).length !== 0) {
      newState = {
        ...newState,
        inputs: formData,
      };
    }
    const [state, dispatch]: any = useReducer(Reducer, newState);
    const actions = useActions(state, dispatch);

    return (
    <FormContext.Provider value={{state, dispatch, actions}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormProvider;

export const useStateValue = () => useContext(FormContext);
