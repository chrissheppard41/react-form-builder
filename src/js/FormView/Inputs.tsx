import React from 'react';
import {useStateValue} from '../context/FormContext';

interface Props {
    inputFields: any,
};

const Inputs = ({inputFields}: Props) => {
    const {actions}: any = useStateValue();
    
    return (
        <li>
            {inputFields.label}
            <button onClick={() => actions.editInput(inputFields.id)}>Edit</button>
            <button onClick={() => actions.deleteInput(inputFields.id)}>Delete</button>
        </li>
    );
};

export default Inputs;
