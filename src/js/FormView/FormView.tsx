import React from 'react';
import {FormConsumer} from '../context/FormContext';
import Dropzone from './Dropzone';
import TextContainer from './container/Text/TextContainer';
import Inputs from './Inputs';
import FormBuilderView from '../formBuilder/FormBuilderView';

type Props = {
    inputs: any,
    deleteInput: (id: string) => void,
    editInput: (id: string) => void,
    setValidation: (validation: boolean) => void,
}

class FormView extends React.Component<Props> {
    static defaultProps = {
        test: '',
    };

    render() {
        const {
            inputs,
            editInput,
            deleteInput,
        } = this.props;

        console.log('inputs', inputs);

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
                                {inputs && Object.keys(inputs).map((id: string) => <Inputs
                                    key={id}
                                    inputFields={inputs[id]}
                                    deletes={deleteInput}
                                    edit={editInput}
                                />)}
                            </ul>
                        </Dropzone>
                    </div>
                </div>
                <div className="formBuilder">
                    <FormBuilderView 
                        inputs={inputs}
                    >
                    </FormBuilderView>
                </div>
            </div>
        );
    }

}

export default FormConsumer(FormView);
