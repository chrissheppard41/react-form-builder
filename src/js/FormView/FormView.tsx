import React from 'react';
import Dropzone from './Dropzone';
import TextContainer from './container/Text/TextContainer';
import Inputs from './Inputs';
import FormBuilderView from '../formBuilder/FormBuilderView';
import {useStateValue} from '../context/FormContext';

const FormView = () => {
    const {state}: any = useStateValue();

    return (
        <div className="formView-container">
            <div className="formView-builder">
                <div className="formView-draggable">
                    <h3>Dragable component</h3>
                    <TextContainer name="Test Input text" />
                </div>
                <div className="formView-dropable">
                    <h3>Drop component</h3>
                    <Dropzone allowedDropEffect="copy">
                        <ul>
                            {state.inputs && Object.keys(state.inputs).map((id: string) => <Inputs
                                key={id}
                                inputFields={state.inputs[id]}
                            />)}
                        </ul>
                    </Dropzone>
                </div>
            </div>
            <div className="formBuilder">
                <FormBuilderView 
                    inputs={state.inputs}
                    validation={state.validation}
                >
                </FormBuilderView>
            </div>
        </div>
    );
}

export default FormView;
