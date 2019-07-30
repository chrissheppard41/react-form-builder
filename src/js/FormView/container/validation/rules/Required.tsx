import React, { useState } from "react";
import Validation from "../Validation";
import Text from "../../../../formBuilder/elements/Text";

interface validation {
  enabled: boolean;
  message: string;
}

interface Props {
  validation: {
    required: validation;
  };
}

const Required = ({ validation }: Props): any => {
  const required: validation = validation.required
    ? validation.required
    : { enabled: false, message: "" };
  const [enabled, setEnabled] = useState(required.enabled);

  return (
    <Validation
      enabled={enabled}
      setEnabled={setEnabled}
      name="Required"
      inputName="required"
    >
      <Text
        label="Message"
        type="text"
        inputClassName="validation"
        inputName="required"
        id="message"
        inputValue={required.message}
        disableChild={true}
      />
      <input
        type="hidden"
        className="validation"
        name="required"
        id="error"
        value="false"
      />
    </Validation>
  );
};

Required.defaultProps = {
  values: {}
};

export default Required;
