import React from 'react';
import FormView from './FormView/FormView';
import FormProvider from './context/FormContext';
import {ComponentListType} from './types/ComponentListType';
//import {inputTypes} from './types/inputType';

interface FormProp {
    editMode: boolean,
    customComponents: ComponentListType,
    formData: any
}

const FormBuilder = ({editMode, customComponents, formData}: FormProp) => {
    return (
      <FormProvider formData={formData}>
        <FormView 
            customComponents={customComponents}
            editMode={editMode}
        />
      </FormProvider>
    );
}

export default FormBuilder;
