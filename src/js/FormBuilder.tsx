import React from "react";
import FormView from "./FormView/FormView";
import FormProvider from "./context/FormContext";
import { ComponentListType } from "./types/ComponentListType";
import { formSubmitType } from "./types/formSubmitType";
import { inputTypes } from "./types/inputType";

interface FormProp {
  action: string;
  editMode: boolean;
  customComponents: ComponentListType;
  formData: inputTypes;
  method: string;
  submitFunc: (data: formSubmitType, error: boolean) => void;
  cancelFunc: (e: any) => void | boolean;
}

const FormBuilder = ({
  action,
  editMode,
  customComponents,
  formData,
  method,
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
        action={action}
        method={method}
      />
    </FormProvider>
  );
};

FormBuilder.defaultProps = {
  action: "",
  cancelFunc: false,
  method: ""
};

export default FormBuilder;
