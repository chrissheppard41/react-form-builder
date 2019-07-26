import React from 'react';
import {inputType} from '../../types/inputType';

const Title = ({
    label,
    inputName,
    parentClassName,
    inputClassName
}: inputType) => {
    const Type: any = inputName ? inputName.toLowerCase() : 'span';

    return (
        <Type className={`${parentClassName || ''} ${inputClassName || ''}`}>{label}</Type>
    );
};

export default Title;
