import React, { useState } from "react";
import Validation from "../Validation";
import Text from "../../../../formBuilder/elements/Text";

interface validation {
  enabled: boolean;
  message: string;
  count: string;
}

interface Props {
  validation: {
    atLeast: validation;
  };
}

const AtLeast = ({ validation }: Props): any => {
  const atLeast: validation = validation.atLeast
    ? validation.atLeast
    : { enabled: false, message: "", count: "0" };
  const [enabled, setEnabled] = useState(atLeast.enabled);

  return (
    <Validation
      enabled={enabled}
      setEnabled={setEnabled}
      name="atLeast"
      inputName="atLeast"
    >
      <Text
        label="Message"
        type="text"
        inputClassName="validation"
        inputName="atLeast"
        id="message"
        inputValue={atLeast.message}
        disableChild={true}
      />
      <Text
        label="Count"
        type="text"
        inputClassName="validation"
        inputName="atLeast"
        id="count"
        inputValue={atLeast.count}
        disableChild={true}
      />
      <input
        type="hidden"
        className="validation"
        name="atLeast"
        id="error"
        value="false"
      />
    </Validation>
  );
};

AtLeast.defaultProps = {
  values: {}
};

export default AtLeast;
