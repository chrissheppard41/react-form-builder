More to come but

1. Create the validation hook

```
interface ValidationHook {
  selectedMessage: string;
  selected: boolean;
}

const useValidationSelect = (
  validation: any,
  value: string,
  id: string,
  addValidation: (id: string, validationRule: string) => void,
  removeValidation: (id: string, validationRule: string) => void
): ValidationHook => {
  let selecteddMessage = "";
  let selected = false;

  if (validation && validation.required) {
    selected = validation.selected.enabled;

    if (selected) {
      if (!value) {
        requiredMessage = validation.selected.message;
        addValidation(id, "selected");
      } else {
        removeValidation(id, "selected");
      }
    }
  }

  return { selected, selectedMessage };
};

export default useValidationSelect;

```
2. Create the validation rule

What appears in the panel

```
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
  const [enabled, setEnabled] = useState(required.enabled);

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
```

This outlines how it's going to be displayed when you import it into the panel. We pull the Validation component to handle everything under [hood](https://github.com/chrissheppard41/react-form-builder/blob/master/src/js/formBuilder/ValidationRules.tsx)

3. Import the validation into your panel

Lets extend the toggle component. Underneath the inputs

```
import the Selected validation file above

...

<div className="validation">
  <h5>Validation rules</h5>
  <Selected validation={panelData.validation} />
</div>
```


4. Import your validation into your component

Opening the `Toggle.tsx` file

```
Import the hook above
import {...ValidationRules...} from "react-form-builder-cs";

...
const { actions }: any = useStateValue();
const [val, setVal] = useState(inputValue);
  
const { requiredMessage, require } = useValidationRequire(
    validation,
    val,
    id,
    actions.addValidation,
    actions.removeValidation
  );
  
if (!disableChild) {

...
(under the Input)
<ValidationRules
  validation={[selectedMessage]}
/>
  
```

5. Adding existing validations to your input Toggle file.

Take a look at the text file to see how multiple validation files are imported [here](https://github.com/chrissheppard41/react-form-builder/blob/master/src/js/formBuilder/elements/Text.tsx)

Instead of importing the hooks like that we can import them like this

`import {useValidationRequire, useValidationEmail, useValidationMinMax... etc} from "react-form-builder-cs";`

