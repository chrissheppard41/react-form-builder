import React, {useState} from 'react';
import {selectType} from '../../types/inputType';

const Select = ({
    label,
    inputName,
    inputValue,
    id,
    inputClassName,
    options
}: selectType) => {
    const [val, setVal] = useState(inputValue);
    
    const listOptions: string[] = (typeof options === 'object')
        ? options
        : (typeof options === 'string')
            ? options.split(',')
            : [];

    return (
        <div className="selectInput">
            <label htmlFor={inputName}>{label}</label>
            <select 
                id={id}
                className={`${inputName} ${inputClassName}`}
                onChange={e => setVal(e.target.value)}
                value={val}
            >
                {listOptions && listOptions.map((option: string, i: number) =>
                    <option key={i} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

Select.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
    panelName: ''
};

export default Select;
