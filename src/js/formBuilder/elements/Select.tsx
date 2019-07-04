import React, {useState} from 'react';
import {selectType} from '../../types/inputType';

const Select = ({
    label,
    inputName,
    inputValue,
    inputClassName,
    options
}: selectType) => {
    const [val, setVal] = useState(inputValue);
  
    return (
        <div className="selectInput">
            <label htmlFor={inputName}>{label}</label>
            <select 
                id={inputName}
                className={`${inputName} ${inputClassName}`}
                onChange={e => setVal(e.target.value)}
                value={val}
            >
                {options.map((option: string, i: number) =>
                    <option key={i} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

Select.defaultProps = {
    inputValue: '',
    inputClassName: '',
};

export default Select;
