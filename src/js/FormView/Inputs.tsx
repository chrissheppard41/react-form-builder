import React from 'react';

interface Props {
    deletes: (id: string) => void,
    edit: (id: string) => void,
    inputFields: any,
};

const Inputs = ({inputFields, edit, deletes}: Props) => (
    <li>
        {inputFields.label}
        <button onClick={() => edit(inputFields.id)}>Edit</button>
        <button onClick={() => deletes(inputFields.id)}>Delete</button>
    </li>
);

export default Inputs;
