import React from "react";
import Panel from "../../Panel";
import Text from "../../../formBuilder/elements/Text";
import Required from "../validation/rules/Required";
import ClassificationPanel from "../../../constants/ClassificationPanel";
import { useStateValue } from "../../../context/FormContext";
import { panelData } from "../../../types/PanelDataType";

interface Props {
  panel: string;
  panelData: panelData;
}

const TextPanel = ({ panel, panelData }: Props): any => {
  const { actions }: any = useStateValue();

  return (
    <>
      {panel === ClassificationPanel.TEXTAREAPANEL && (
        <Panel
          title="Textarea panel"
          id={panelData.id}
          submit={actions.save}
          clearPanel={actions.clearPanel}
        >
          <h5>Input fields</h5>
          <Text
            label="Enter label"
            type="text"
            inputValue={panelData.label}
            inputClassName="text"
            inputName="label"
          />
          <Text
            label="Enter name"
            type="text"
            inputClassName="text"
            inputName="inputName"
            inputValue={panelData.inputName}
          />
          <Text
            label="Enter parent class name"
            type="text"
            inputClassName="text"
            inputName="parentClassName"
            inputValue={panelData.parentClassName}
          />
          <Text
            label="Enter input class name"
            type="text"
            inputClassName="text"
            inputName="inputClassName"
            inputValue={panelData.inputClassName}
          />
          <Text
            label="Enter cols"
            type="number"
            inputClassName="cols"
            inputName="cols"
            inputValue={panelData.cols}
          />
          <Text
            label="Enter rows"
            type="number"
            inputClassName="rows"
            inputName="rows"
            inputValue={panelData.rows}
          />
          <div className="validation">
            <h5>Validation rules</h5>
            <Required validation={panelData.validation} />
          </div>
        </Panel>
      )}
    </>
  );
};

export default TextPanel;
