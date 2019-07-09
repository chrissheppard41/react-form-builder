import React, {useState} from 'react';
import {inputType} from '../../types/inputType';
import ValidationRules from '../ValidationRules';

const Text = ({
    label,
    type,
    id,
    inputName,
    inputValue,
    inputClassName,
    validation
}: inputType) => {
    const [val, setVal] = useState(inputValue);
  
    return (
        <div className="textInput">
            <label htmlFor={inputName}>{label}</label>
            <input
                type={type}
                name={inputName}
                className={inputClassName}
                id={id}
                value={val}
                onChange={e => setVal(e.target.value)}
            />
            <ValidationRules 
                validation={validation}
            />
        </div>
    );
}

Text.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
};

export default Text;
