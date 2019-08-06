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
            inputClassName="toggle"
            inputName="label"
          />
          <Text
            label="Enter name"
            type="text"
            inputClassName="toggle"
            inputName="inputName"
            inputValue={panelData.inputName}
          />
          <Text
            label="Enter parent class name"
            type="text"
            inputClassName="toggle"
            inputName="parentClassName"
            inputValue={panelData.parentClassName}
          />
          <Text
            label="Enter input class name"
            type="text"
            inputClassName="toggle"
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
import {Div, Label, Input, useStateValue, inputType} from "react-form-builder";

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
  const [val, setVal] = useState(inputValue);
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
        className={`${inputClassName}`}
        id={id}
        value={val}
        onChange={e => setVal(e.target.value)}
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

```

Breaking this down, we have a component called `Toggle`. We pull the same data that we set in the panel:

- label
- inputName
- parentClassName
- inputClassName

This input can be extended to include whatever you set in the panel, you will just need to change the `type` to suit your object data. We pull in the actions hook and the set up our state hook to remember the input value. Div, Label and Input are all styled components. You don't need to use these style components but it gives some consistency in the form. DisableChildren propertly means that if you have a the child drop zones enabled, on input of a value against the input, will enable these children.

4. Store it into a file we can import into the module

This part brings all your files together into a list we will then import into our component.

```
>>> import your 3 components here and extract them below 
import {ComponentListType} from "react-form-builder-cs";

const Components: ComponentListType = {
  ["Toggle"]: {
    Draggable: ToggleInput,
    Input: Toggle,
    Panel: TogglePanel
  }
};
export default Components;
```

We have given this the name Toggle, that's the index. We import the 3 components outlined above.

5. This/or
    a. Import the component list into the form builder editor
    
    When you have cloned the project, go into the `App.tsx` file. Import your custom component file, add it to `customComponents={<IMPORT VAR HERE>}`. When you start the project, you will see the Toggle input as part of the list of Draggables. You should be able to Drag it into the drop zones, once dropped you can edit and delete this component. If you click edit you should see the panel which you can populate with your data. In the form live view you should be able to see your component appear with the data you set in the panel.
    
    b. Import the component list into the live form view
    
    The code base already outlines how to add custom components [here](https://github.com/chrissheppard41/react-form-builder/tree/develop/examples/HowToUse). Look for `customComponents`. Import the file above into where you have references the `<FormBuilder ... />` code. Add the `customComponents={importedComponents}` and you should see your component added to the infastructure. So if you have created a form via the FormBuilder, and you added your custom component to your form and you've imported your Json into the above statement you should see your toggle component display in the live view.

And that is it!
