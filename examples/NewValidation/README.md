# Creation of a validation rule

As part of this, we can create our own validation rules as well as importing existing rules. This allows us to add validation to the live view of the form that you can only submit the form under these condiitons

1. Create the validation hook

Lets set up the validation hook

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

This hook is simple. If there is no selection then print an error. So we import the the `addValidaiton` and `removeValidation`. These 2 functions control the display of the issue, by adding the "selected" string against the `id` of the input.

We pass in this validation rule as part of the hook to get the value we set inside the panel.

The value of the input is also passed in.

We do a check against the data and return the error data back as a response.

2. Create the validation rule

Now we create what we want to display inside the panel.

The validation for the input is passed in. It checks to see if there is previous data set against it and will display it accordingly.

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

In this case we set the state of the validation to what is passed in. We have a checkbox to enable this validation which will change the boolean value of the state stored variable. We have an input for what to display as the error message.

One this to note is that the inputName and the name must all be the same. It uses it as an identifier to check and store against it.

We import the `Validation` and everything else outlines how it's going to be displayed when you import it into the panel. We pull the Validation component to handle everything under [hood](https://github.com/chrissheppard41/react-form-builder/blob/master/src/js/formBuilder/ValidationRules.tsx).

3. Import the validation into your panel

We need to now display this into the panel. Lets extend the toggle component. Underneath the inputs

```
import the Selected validation file above

...

<div className="validation">
  <h5>Validation rules</h5>
  <Selected validation={panelData.validation} />
</div>
```

4. Import your validation into your component

Now we need to add this to our form view input. Opening the `Toggle.tsx` file created in the last example, add the:

- useValidationRequire - Under the useState code
- ValidationRules with the selectedMessage - Under the input

```
Import the hook above
import {...ValidationRules...} from "react-form-builder-cs";
import useValidationRequire from 'useValidationRequire';

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

This will enable the validation, if you now refresh the form builder live view you will see it appear when you click submit.

5. Adding existing validations to your input Toggle file.

Take a look at the text file to see how multiple validation files are imported [here](https://github.com/chrissheppard41/react-form-builder/blob/master/src/js/formBuilder/elements/Text.tsx)

Instead of importing the hooks like that we can import them like this

`import {useValidationRequire, useValidationEmail, useValidationMinMax... etc} from "react-form-builder-cs";`

To see how this all looks please see: Coming soon
