import React, { useState } from "react";
import {Text, Validation} from "react-form-builder-cs";

interface validation {
  enabled: boolean;
  message: string;
}

interface Props {
  validation: {
    selected: validation;
  };
}

const Selected = ({ validation }: Props): any => {
  const selected: validation = validation.selected
    ? validation.selected
    : { enabled: false, message: "" };
  const [enabled, setEnabled] = useState(selected.enabled);

  return (
    <Validation
      enabled={enabled}
      setEnabled={setEnabled}
      name="Selected"
      inputName="selected"
    >
      <Text
        label="Message"
        type="text"
        inputClassName="validation"
        inputName="selected"
        id="message"
        inputValue={selected.message}
        disableChild={true}
      />
      <input
        type="hidden"
        className="validation"
        name="selected"
        id="error"
        value="false"
      />
    </Validation>
  );
};

Selected.defaultProps = {
  values: {}
};

export default Selected;
