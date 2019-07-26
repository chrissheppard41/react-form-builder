import React from 'react';
import {inputType} from '../../types/inputType';

const H3 = ({
    label
}: inputType) => {
    return (
        <h3 className="h3">{label}</h3>
    );
};

export default H3;
