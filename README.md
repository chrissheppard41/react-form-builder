[![npm version](https://img.shields.io/npm/v/react-form-builder-cs.svg?style=flat-square)](https://www.npmjs.com/package/react-form-builder-cs)
[![npm downloads](https://img.shields.io/npm/dm/react-form-builder-cs.svg?style=flat-square)](https://www.npmjs.com/package/react-form-builder-cs)
[![github last-commit](https://img.shields.io/github/last-commit/chrissheppard41/react-form-builder)](https://github.com/chrissheppard41/react-form-builder)
[![github issues](https://img.shields.io/github/issues/chrissheppard41/react-form-builder)](https://github.com/chrissheppard41/react-form-builder/issues)
[![github license](https://img.shields.io/github/license/chrissheppard41/react-form-builder)](https://github.com/chrissheppard41/react-form-builder)

# React-Form-Builder

The react from builder is a tool that allows you to generate forms. 

## Installation

`npm i react-form-builder-cs` or `yarn install react-form-builder-cs`

## Usage

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

Other useful information regarding how to use go here: [here](https://github.com/chrissheppard41/react-form-builder/blob/master/examples/HowToUse/README.md).

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

## Cloning the project and create the json for your form

To create your form the best thing to do is to clone the project into your projects folder:

`git clone git@github.com:chrissheppard41/react-form-builder.git`

CD into the form builder:

`cd react-form-builder`

Pull in the packages:

`yarn install` or `npm i`

Once done we can start up the project

`yarn run start` or `npm run start`

It should open in your favourite browser but if it doesn't, go here `http://localhost:3000`

And that's it, you are now ready to create your form. This is the best way to create the json for the form. 

### What do I see when I start the project

This screen that you see can be broken down into 2 parts, the form creation view and the form live view.

#### Form creation view

This is 2 column section, it has components on the left which you can drag into the drop zones on the right.

There are default components you can use at the beginning and this can be expanded by you by passing in [custom components](https://github.com/chrissheppard41/react-form-builder/blob/master/examples/NewComponent/README.md).

- Text input component - Will output an input of type text (can be updated to email, number or file)
- Hr component - Will output a `< hr / >` tag
- General elements component - Will output general HTML elements like H1-6, paragraphs, spans etc
- Select input component - Will output a select option list (can be upgraded to multiple select)
- Radio/Checkbox input component - Will output radio or checkboxes
- Textarea component - will output a textarea

When you drag one of this components into the dropzone 2 things will happen:

- The ability to edit (a panel will open which will allow you to customize your input) and delete this component
- The ability to drag a child input (with the exclusion of hr components) into a sub paragraph. This means that all children will remain hidden until the parent component has an input value. This allows you to hide inputs to be displayed later.

##### Deleting components from the drop zone

Simple operation, once dragged you can delete any components. A modal will pop up when you click delete, it will outline what components will be deleted, please note that if you delete a parent component the children will also be removed.

##### Edit and panels

The operation to allow you to customize the inputs. When you click edit a panel will appear, this panel will allow you to tweak the input by assigning name, class names, parent class names, *validation*. Explore these panels in more detail, it's quite self explanatory.

##### Copy to clipboard

This section is the JSON you'll need to pass into your `FormBuilder` `formData` component outlined above. You can copy it at any time by pressing the `Copy to clipboard`, pass it into the formData. Test out your functionality on your live form.

#### Live view

When you drag a component into the drop zone it will render what it will look like in the live view. This will allow you to test out your forms at any time, test the way it looks, the validation, the submit functionality etc. before so you can test out the features first.



## How to create input components

To create custom inputs and to add them in go [here](https://github.com/chrissheppard41/react-form-builder/blob/master/examples/NewComponent/README.md).

## How to create validations for inputs

To create custom validation and to add them in go [here](https://github.com/chrissheppard41/react-form-builder/blob/master/examples/NewValidation/README.md).

## Available Scripts

When you git clone this project. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run clean`

Deletes the lib folder after a build

### `npm run build`

Builds the project into a `./lib` folder.

## Other

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## License

MIT
