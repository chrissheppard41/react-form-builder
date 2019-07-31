import React from "react";
import FormView from "./FormView/FormView";
import FormProvider from "./context/FormContext";
import { ComponentListType } from "./types/ComponentListType";
import { formSubmitType } from "./types/formSubmitType";
import { inputTypes } from "./types/inputType";

interface FormProp {
  editMode: boolean;
  customComponents: ComponentListType;
  formData: inputTypes;
  submitFunc: (data: formSubmitType, error: boolean) => void;
  canelFunc: (e: any) => void | boolean;
}

const FormBuilder = ({
  editMode,
  customComponents,
  formData,
  submitFunc,
  canelFunc
}: FormProp) => {
  return (
    <FormProvider formData={formData}>
      <FormView
        customComponents={customComponents}
        editMode={editMode}
        submitFunc={submitFunc}
        canelFunc={canelFunc}
      />
    </FormProvider>
  );
};

FormBuilder.defaultProps = {
  canelFunc: false
};

export default FormBuilder;
