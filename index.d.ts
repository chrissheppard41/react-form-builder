// Type definitions for react-form-builder
// Project: https://github.com/chrissheppard41/react-form-builder
// Definitions by: Chris Sheppard <https://github.com/chrissheppard41>

interface FormProp {
    editMode: boolean,
    customComponents: ComponentListType,
    formData: inputTypes
}

declare function FormBuilder({editMode, customComponents, formData}: FormProp): any;
declare namespace FormBuilder { }
export = FormBuilder;
  