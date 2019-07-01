import React, { Fragment } from 'react';
import TextPanel from './TextPanels';
import {FormConsumer} from '../../../context/FormContext';
import TextInput from './TextInput';

type Props = {
    panel: string,
    addInput: (test: string) => void,
    inputs: any,
    save: (data: any) => void,
    panelData: {id: string},
};

const TextContainer = ({panel, addInput, inputs, save, panelData}: Props): any => 
    <Fragment>
        <TextInput className="drag-element" name="Test Input text" inputs={inputs} addInput={addInput} />
        <TextPanel panel={panel} save={save} panelData={inputs[panelData.id]} />
    </Fragment>;
    
export default FormConsumer(TextContainer);

