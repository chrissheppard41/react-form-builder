import React from "react";
import MapFormInputs from "./MapFormInputs";
import ComponentList from "./ComponentList";
import { ComponentListType } from "../types/ComponentListType";
import { formSubmitType } from "../types/formSubmitType";

interface Props {
  inputs: {
    [id: string]: any;
  };
  validation: {
    [id: string]: string[];
  };
  customComponents: ComponentListType;
  submitTo: (formData: formSubmitType) => void;
  canelFunc: (e: any) => void | boolean;
}

interface State {
  error: boolean;
}

class FormBuilderView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: false
    };
  }

  anyErrors = () => {
    const { validation } = this.props;
    let errors = 0;

    Object.keys(validation).forEach((key: string) => {
      errors += validation[key].length;
    });

    if (errors > 0) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  cancel = (e: any) => {
    e.preventDefault();
    this.props.canelFunc(e);
  };

  submit = (e: any) => {
    e.preventDefault();
    this.anyErrors();

    let submitObject = {};
    if (!this.state.error) {
      for (const field in e.target) {
        if (e.target[field] && e.target[field].value) {
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

    this.props.submitTo(submitObject);
  };

  render() {
    const {
      children,
      inputs,
      validation,
      customComponents,
      canelFunc
    } = this.props;
    const { error } = this.state;

    return (
      <div className="formBuilder-container">
        {children}
        <form
          name="formBuilder"
          className={`formBuilder ${error ? "error" : ""}`}
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
          {canelFunc && (
            <button onClick={(e: any) => this.cancel(e)}>Cancel</button>
          )}
        </form>
      </div>
    );
  }
}

export default FormBuilderView;
