import {Div, Label, Input, useStateValue, inputType, ValidationRules} from "react-form-builder-cs";
import useValidationSelect from './useValidationSelect';
import React, {useState} from "react";

const Toggle = ({
  label,
  id,
  inputName,
  inputValue,
  inputClassName,
  validation,
  disableChild
}: inputType) => {
  const { actions }: any = useStateValue();
  const [val, setVal] = useState(false);
  const { selectedMessage, selected } = useValidationSelect(
    validation,
    val,
    id,
    actions.addValidation,
    actions.removeValidation
  );
  if (!disableChild) {
    actions.enableChildren(id, val);
  }

  return (
    <Div className="toggleInput">
      <Label htmlFor={inputName}>
        {label}
      </Label>
      <Input
        type="checkbox"
        name={inputName}
        className={`${inputClassName} ${selected}`}
        id={id}
        value={inputValue}
        onChange={() => setVal(!val)}
      />
      <ValidationRules
        validation={[selectedMessage]}
      />
    </Div>
  );
};

Toggle.defaultProps = {
  id: "",
  inputName: "",
  inputValue: "",
  inputClassName: "",
  validation: {},
  connected: "",
  enableChildren: false,
  disableChild: false,
  panelName: "",
  parentClassName: "",
  label: "",
  type: "",
  inputType: "",
  fromPanel: false
};

export default Toggle;
