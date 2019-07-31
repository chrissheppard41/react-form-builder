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
  cancelFunc: (e: any) => void | boolean;
}

const FormBuilder = ({
  editMode,
  customComponents,
  formData,
  submitFunc,
  cancelFunc
}: FormProp) => {
  return (
    <FormProvider formData={formData}>
      <FormView
        customComponents={customComponents}
        editMode={editMode}
        submitFunc={submitFunc}
        cancelFunc={cancelFunc}
      />
    </FormProvider>
  );
};

FormBuilder.defaultProps = {
  canelFunc: false
};

export default FormBuilder;
