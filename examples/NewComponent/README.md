# Creating a new component

This form builder allows you to create your own custom components and add them into the function. The form builder exposes types, validation and inputs you can consume to build panels, validate your new inputs and build on the base functionality. This gives you flexiblity to build powerful forms.

Any issues with the following section you can raise issues to correct.

## How to create custom components

So the format of the custom component has to follow this structure:

```
ComponentListType {
  [key: string]: {
    Input: any;
    Draggable: any;
    Panel: any;
  };
}
```

An object array, were the key identifies the component.

- Input is what is rendered as an end product to the live form view or any component that calls it.
- Draggable means that you can drag it from the draggable component section of the form editor
- Panel contains the logic for storing data against that input stored within the application.

At the end you import the custome list of components into the `<FormBuilder customComponents={<HERE>}>` when building initialising the module.

### First component

Lets create a toggle:

 Note : Folder structure: `<project src>/customComponents/**`

1. Create the Draggable component

How the current components call all this functionality is pretty simple.

So create it like this:

```
... (imports)
import {Drag} from "react-form-builder-cs";

export interface BoxProps {
  className: string;
  connected: string;
}

const ToggleDrag = ({ className, connected }: BoxProps) => {
  const name = "Toggle component";

  return (
    <Drag
      className={className}
      name={name}
      connected={connected}
      input="Toggle"
      panelName="TogglePanel"
    >
      {name}
    </Drag>
  );
};

export default ToggleDrag;
```

What does this above mean. Lets break it down:

`interface BoxProps` - outlines the type. This is a requirement. The system will pass in these 2 functions into your component.

The name of the component is `ToggleDrag`, we import the arguements for this component and assign the interface. We then need a name for this component, and in this case we have called it `Toggle component`.

The return, we would import the Drag component into our Draggable. This will pull the required functionality to make this draggable by the system. You can see this from the import at the top:

`import {Drag} from "react-form-builder-cs";`

The Drag component requires the following:

- children: any - A simple way of importing children into the react component
- className: string - the class name of the component
- input: string - The type of input this is
- name: string - The name of the component
- connected: string - The connection, is it part of a parent component when dragged
- overrideDropzone: boolean - Does this component require a child drop zone, false to disable
- overridePanel: boolean - Does this component require a panel, false to disable
- panelName: string - The name of the panel

This get stored into react-dnd and when dragged builds the input object array.

More information on what the Drag does can be located [here](https://github.com/chrissheppard41/react-form-builder/blob/master/src/js/FormView/container/Drag.tsx);

2. Create the Panel component

To create a panel lets take a look at this bit of code:

```
...
import {Panel, Text, useStateValue, panelData} from "react-form-builder";

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
        </Panel>
      )}
    </>
  );
};

export default TogglePanel;
```

3. Create the input

```
import {Div, Label, Input} from "react-form-builder";

const Text = ({
  label,
  type,
  id,
  inputName,
  inputValue,
  inputClassName,
  validation,
  disableChild
}: inputType) => {
  const { actions }: any = useStateValue();
  const [val, setVal] = useState(inputValue);
  if (!disableChild) {
    actions.enableChildren(id, val);
  }

  return (
    <Div className="textInput">
      <Label htmlFor={inputName}>
        {label}
        {require && ` *`}
      </Label>
      <Input
        type={type}
        name={inputName}
        className={`${inputClassName} ${email} ${number}`}
        id={id}
        value={val}
        onChange={e => setVal(e.target.value)}
        required={require}
      />
    </Div>
  );
};

Text.defaultProps = {
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

export default Text;

```

4. Store it into a file we can import into the module
5. This/or
    a. Import the component list into the form builder editor
    b. Import the component list into the live form view

And that is it!