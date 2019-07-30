import React from "react";
import { panelData } from "../types/PanelDataType";

interface Props {
  children: React.ReactNode[];
  title: string;
  id: string;
  submit: (data: panelData) => void;
  clearPanel: () => void;
}

class Panel extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit = (event: any) => {
    event.preventDefault();
    const { submit, clearPanel } = this.props;

    let formData: panelData = { validation: {} };

    for (const field in event.target) {
      if (event.target[field] && event.target[field].value !== undefined) {
        const name = event.target[field].name || event.target[field].id;

        if (name === undefined || name === "") {
          continue;
        }
        if (!formData[name]) {
          formData[name] = undefined;
        }
        if (
          event.target[field].value &&
          event.target[field].className.includes("validation")
        ) {
          formData = {
            ...formData,
            validation: {
              ...formData.validation,
              [event.target[field].name]: {
                //@ts-ignore
                ...formData.validation[event.target[field].name],
                [event.target[field].id]:
                  event.target[field].type === "checkbox"
                    ? event.target[field].checked
                    : event.target[field].value
              }
            }
          };
        } else {
          if (event.target[field].type === "checkbox") {
            if (event.target[field].checked) {
              formData = {
                ...formData,
                [name]: [...(formData[name] || []), event.target[field].value]
              };
            }
          } else if (event.target[field].type === "radio") {
            if (event.target[field].checked) {
              formData = {
                ...formData,
                [name]: event.target[field].value
              };
            }
          } else {
            formData = {
              ...formData,
              [name]: event.target[field].value
            };
          }
        }
      }
    }

    submit(formData);
    clearPanel();
  };

  render() {
    const { children, title, id, clearPanel } = this.props;

    return (
      <div className="panel-container">
        <div className="panel-overlay" onClick={() => clearPanel()} />
        <div className="panel-area">
          <header className="header">{title}</header>
          <div className="panel-body">
            <form onSubmit={this.submit}>
              <div className="inputs">{children}</div>
              <div className="footer">
                <input type="hidden" name="id" value={id} />
                <button type="submit">Submit</button>
                <button onClick={() => clearPanel()}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
