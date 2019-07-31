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
