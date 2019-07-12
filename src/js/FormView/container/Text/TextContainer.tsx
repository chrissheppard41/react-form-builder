import React, { Fragment } from 'react';
import TextPanel from './TextPanels';
import TextInput from './TextInput';
import {useStateValue} from '../../../context/FormContext';

type Props = {
    name: string,
};

const TextContainer = ({name}: Props): any => {
    const {state}: any = useStateValue();

    return <Fragment>
        <TextInput className="drag-element" name={name} inputs={state.inputs} />
        <TextPanel panel={state.panel} panelData={state.inputs[state.panelData.id]} />
    </Fragment>;
}   
    
export default TextContainer;
