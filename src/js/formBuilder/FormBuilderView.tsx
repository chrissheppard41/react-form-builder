import React from "react";
import MapFormInputs from "./MapFormInputs";
import ComponentList from "./ComponentList";
import { ComponentListType } from "../types/ComponentListType";
import { formSubmitType } from "../types/formSubmitType";

interface Props {
  action: string;
  customComponents: ComponentListType;
  formError: boolean;
  inputs: {
    [id: string]: any;
  };
  validation: {
    [id: string]: string[];
  };
  method: string;
  setFormError: (error: boolean) => void;
  submitTo: (formData: formSubmitType, error: boolean) => void;
  cancelFunc: (e: any) => void | boolean;
}

class FormBuilderView extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: false
    };
  }

  anyErrors = (): boolean => {
    const { validation, setFormError } = this.props;
    let errors = 0;

    Object.keys(validation).forEach((key: string) => {
      errors += validation[key].length;
    });

    setFormError(errors > 0);
    return errors > 0;
  };

  cancel = (e: any) => {
    e.preventDefault();
    this.props.cancelFunc(e);
  };

  submit = (e: any) => {
    e.preventDefault();
    const error = this.anyErrors();

    let submitObject = {};
    if (!error) {
      for (const field in e.target) {
        if (e.target[field] && e.target[field].value) {
          if (e.target[field].type !== undefined) {
            if (e.target[field].type !== "submit") {
              if (
                e.target[field].type === "checkbox" ||
                e.target[field].type === "radio"
              ) {
                if (e.target[field].checked) {
                  submitObject = {
                    ...submitObject,
                    [e.target[field].name]: e.target[field].value
                  };
                }
              } else {
                submitObject = {
                  ...submitObject,
                  [e.target[field].name]: e.target[field].value
                };
              }
            }
          }
        }
      }
    }

    this.props.submitTo(submitObject, error);
  };

  render() {
    const {
      children,
      inputs,
      validation,
      customComponents,
      cancelFunc,
      formError,
      action,
      method
    } = this.props;

    return (
      <div className="formBuilder-container">
        {children}
        <form
          name="formBuilder"
          action={action}
          method={method}
          className={`formBuilder ${formError ? "error" : ""}`}
          onSubmit={this.submit}
          noValidate
        >
          <MapFormInputs
            inputs={inputs}
            validation={validation}
            componentList={{ ...customComponents, ...ComponentList }}
            connected=""
          />
          <input type="submit" value="Submit" />
          {cancelFunc && (
            <button onClick={(e: any) => this.cancel(e)}>Cancel</button>
          )}
        </form>
      </div>
    );
  }
}

export default FormBuilderView;
