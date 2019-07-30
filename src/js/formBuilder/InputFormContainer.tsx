import React from "react";
import { ValidationIssues } from "../types/validationType";

interface Props {
  children: any;
  classes: string;
  validation: ValidationIssues;
}

const InputFormContainer = ({ children, classes, validation }: Props) => {
  const buildClasses = `inputContainer ${classes} ${
    validation.length !== 0 ? " error" : ""
  }`;

  return <div className={buildClasses}>{children}</div>;
};

InputFormContainer.defaultProps = {
  className: "",
  validation: []
};

export default InputFormContainer;
