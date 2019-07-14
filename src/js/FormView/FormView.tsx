import React from 'react';
import Dropzone from './Dropzone';
import Inputs from './Inputs';
import FormBuilderView from '../formBuilder/FormBuilderView';
import {useStateValue} from '../context/FormContext';
import {ComponentListType} from '../types/ComponentListType';
import ComponentList from '../formBuilder/ComponentList';
import ConsiseFraggableInputs from '../utilities/ConciseDraggableInputs';

type Props = {
    customComponents: ComponentListType,
};

const FormView = ({customComponents}: Props) => {
    const {state}: any = useStateValue();

    return (
        <div className="formView-container">
            <div className="formView-builder">
                <div className="formView-draggable">
                    <h3>Dragable component</h3>
                    {ConsiseFraggableInputs(ComponentList).map((key: string) => {
                        const Component = ComponentList[key];

                        if (!Component.Panel) {
                            console.error(`Component ${key}: No panel Provided in object`);
                            return null;
                        }

                        return <Component.Panel key={key} />;
                    })}
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
                    customComponents={customComponents}
                >
                </FormBuilderView>
            </div>
        </div>
    );
}

export default FormView;
