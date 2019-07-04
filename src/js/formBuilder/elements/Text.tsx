import React, {useState} from 'react';
import {inputType} from '../../types/inputType';

const Text = ({
    label,
    type,
    inputId,
    inputName,
    inputValue,
    inputClassName
}: inputType) => {
    const [val, setVal] = useState(inputValue);
  
    return (
        <div className="textInput">
            <label htmlFor={inputName}>{label}</label>
            <input
                type={type} 
                name={inputName} 
                className={inputClassName}
                id={inputId}
                value={val}
                onChange={e => setVal(e.target.value)}
            />
        </div>
    );
}

Text.defaultProps = {
    inputId: '',
    inputValue: '',
    inputClassName: '',
};

export default Text;
