import React, { useState } from "react";
import Validation from "../Validation";
import Text from "../../../../formBuilder/elements/Text";

interface validation {
  enabled: boolean;
  message: string;
}

interface Props {
  validation: {
    email: validation;
  };
}

const Email = ({ validation }: Props): any => {
  const email: validation = validation.email
    ? validation.email
    : { enabled: false, message: "" };
  const [enabled, setEnabled] = useState(email.enabled);

  return (
    <Validation
      enabled={enabled}
      setEnabled={setEnabled}
      name="Email"
      inputName="email"
    >
      <Text
        label="Message"
        type="text"
        inputClassName="validation"
        inputName="email"
        id="message"
        inputValue={email.message}
        disableChild={true}
      />
      <input
        type="hidden"
        className="validation"
        name="email"
        id="error"
        value="false"
      />
    </Validation>
  );
};

Email.defaultProps = {
  values: {}
};

export default Email;
