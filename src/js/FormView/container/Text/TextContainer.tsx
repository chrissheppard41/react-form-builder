import React from 'react';
import TextPanel from './TextPanels';
import TextInput from './TextInput';
import {useStateValue} from '../../../context/FormContext';

const TextContainer = (): any => {
    const {state}: any = useStateValue();

    return <>
        <TextInput className="drag-element" name={"Test Input text"} inputs={state.inputs} />
        <TextPanel panel={state.panel} panelData={state.inputs[state.panelData.id]} />
    </>;
}   
    
export default TextContainer;
