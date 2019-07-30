import React, { useState } from "react";
import Validation from "../Validation";
import Text from "../../../../formBuilder/elements/Text";

interface validation {
  enabled: boolean;
  message: string;
  min: string;
  max: string;
}

interface Props {
  validation: {
    number: validation;
  };
}

const Number = ({ validation }: Props): any => {
  const number: validation = validation.number
    ? validation.number
    : { enabled: false, message: "", min: "0", max: "0" };
  const [enabled, setEnabled] = useState(number.enabled);

  return (
    <Validation
      enabled={enabled}
      setEnabled={setEnabled}
      name="number"
      inputName="number"
    >
      <Text
        label="Message"
        type="text"
        inputClassName="validation"
        inputName="number"
        id="message"
        inputValue={number.message}
        disableChild={true}
      />
      <Text
        label="Min"
        type="text"
        inputClassName="validation"
        inputName="number"
        id="min"
        inputValue={number.min}
        disableChild={true}
      />
      <Text
        label="Max"
        type="text"
        inputClassName="validation"
        inputName="number"
        id="max"
        inputValue={number.max}
        disableChild={true}
      />
      <input
        type="hidden"
        className="validation"
        name="number"
        id="error"
        value="false"
      />
    </Validation>
  );
};

Number.defaultProps = {
  values: {}
};

export default Number;
