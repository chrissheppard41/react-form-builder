# Usage

To import into your package: 

`import FormBuilder from 'react-form-builder-cs';`

Then to use put this anywhere on your dom (remember if you have editMore to true you'll need a bit of space to render everything correctly):

```react
<FormBuilder
  editMode={}
  customComponents={}
  formData={}
  submitFunc={}
  cancelFunc={}
/>
```

`editMode` - Boolean (default false):\
true to enable edit more, this is were you'd build your form.\
false - display the output form to the dom.

`customComponents` - Object (default {}):\
Allows you to add your own custom components. Find out how to create your own components [here](https://github.com/chrissheppard41/react-form-builder/blob/master/examples/NewComponent/README.md).

`formData` - Object (default {}):\
This is where you'd pass in your form structure. You generate this via `editMode`, it will generate a JSON Object. You copy that object into this input

`submitFunc` - Function:\
This is the callback function that the data of the end form gets submitted to.

`cancelFunc` - (Optional) Function or Boolean:\
This is the callback function that the any cancel operation you want to perform gets sent to. It's a function to do an operation or a boolean (false) to disable. This is an optional call. You don't need to include it.

`action` - (Optional) String:\
This allows you to specify a action url path as a backup if you wish.

`method` - (Optional) String:\
This allows you to put in a method call, GET or POST

 Note: one thing you will need to be made aware is when you put it into edit mode. 

```
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

...

<DndProvider backend={HTML5Backend}>
  <FormBuilder />
</DndProvider>

...
```

For react-dnd to work properly you need to include this. One thing about this is that you need to ensure this only excutes once else it will error. I put this in the `index.jsx/tsx`. an example of this can be located [here](https://github.com/chrissheppard41/react-form-builder/blob/master/src/index.tsx).

### Key information:

How this works is you submit your formData object into the Form Builder component and it'll store and then render the form. This will allow usage of the form from a basic point. 

If you want to build a form, you set it into edit mode (true) then Drag the components into the drop zones. Most components will allow you to edit, inside these edits you can edit various aspects of the input:

- Label
- input class
- input name
- Parent class name
- Options (if a radio/checkbox or select)

For the most part. These inputs will vary.

You can also, in the panel, add validation if they are enabled in the component. Making them:

- For all inputs - Required
- Email text type
- At least type for radio, checkboxes and selections meaning you must select a count you van specify
- Min/max for text types. Meaning:
 
   - if it's a number inputted the min max you set will dictate the value
   - More to come
