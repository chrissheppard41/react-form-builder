import React from 'react';
import Dropzone from './Dropzone';
import Draggables from './Draggables';
import FormBuilderView from '../formBuilder/FormBuilderView';
import {useStateValue} from '../context/FormContext';
import ComponentList from '../formBuilder/ComponentList';
import {ComponentListType} from '../types/ComponentListType';
import Panels from './Panels';
import DeleteModal from './modals/DeleteModal';
import ModalNames from '../constants/ModalNames';

type Props = {
    customComponents: ComponentListType,
};

const FormView = ({customComponents}: Props) => {
    const {state}: any = useStateValue();

    const componentList = {
        ...ComponentList,
        ...customComponents,
    };

    return (
        <div className="formView-container">
            <div className="formView-builder">
                <Panels 
                    componentList={componentList}
                    state={state}
                />
                <Draggables 
                    classNames="formView-draggable"
                    componentList={componentList}
                    connected={state.panelData.id}
                />
                <div className="formView-dropable">
                    {state.modal.name === ModalNames.DELETE && <DeleteModal />}
                    <h3>Drop component</h3>
                    <div className="form-dropzone">
                        <Dropzone
                            allowedDropEffect="copy"
                            classNames=""
                            connected=''
                        />
                    </div>
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
