import React from "react";
import {Panel, Text, useStateValue, panelData} from "react-form-builder";
import Selected from "./Selected";

interface Props {
  panel: string;
  panelData: panelData;
}

const TogglePanel = ({ panel, panelData }: Props): any => {
  const {actions}: any = useStateValue();

  return (
    <>
      {panel === "TogglePanel" && (
        <Panel
          title="Toggle panel"
          id={panelData.id}
          submit={actions.save}
          clearPanel={actions.clearPanel}
        >
          <h5>Input fields</h5>
          <Text
            label="Enter label"
            type="text"
            inputValue={panelData.label}
            inputClassName="toggle"
            inputName="label"
          />
          <Text
            label="Enter name"
            type="text"
            inputClassName="toggle"
            inputName="inputName"
            inputValue={panelData.inputName}
          />
          <Text
            label="Enter parent class name"
            type="text"
            inputClassName="toggle"
            inputName="parentClassName"
            inputValue={panelData.parentClassName}
          />
          <Text
            label="Enter input class name"
            type="text"
            inputClassName="toggle"
            inputName="inputClassName"
            inputValue={panelData.inputClassName}
          />
          <div className="validation">
            <h5>Validation rules</h5>
            <Selected validation={panelData.validation} />
          </div>
        </Panel>
      )}
    </>
  );
};

export default TogglePanel;
