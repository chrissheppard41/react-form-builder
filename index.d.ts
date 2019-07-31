// Type definitions for react-form-builder
// Project: https://github.com/chrissheppard41/react-form-builder
// Definitions by: Chris Sheppard <https://github.com/chrissheppard41>

interface FormProp {
  editMode: boolean;
  customComponents: ComponentListType;
  formData: inputTypes;
  submitFunc: (data: formSubmitType, error: boolean) => void;
  cancelFunc?: (e: any) => void | boolean;
}

declare function FormBuilder({
  editMode,
  customComponents,
  formData,
  submitFunc,
  canelFunc
}: FormProp): any;
declare namespace FormBuilder {}
export = FormBuilder;
