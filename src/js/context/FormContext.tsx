import React, {createContext, useReducer, useContext} from 'react';
import useActions from '../context/useActions';
import Reducer, {initialState} from './Reducer';

export const FormContext = createContext({});

type Props = {
    children: any,
};

const FormProvider = ({children}: Props) => {
    const [state, dispatch]: any = useReducer(Reducer, initialState);
    const actions = useActions(state, dispatch);

    return (
    <FormContext.Provider value={{state, dispatch, actions}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormProvider;

export const useStateValue = () => useContext(FormContext);
