import React, {useState} from 'react';
import {selectType} from '../../types/inputType';
import Options from '../../types/Options';
import {formatSingleOptions} from '../../utilities/OptionBuild';

const Select = ({
    label,
    inputName,
    inputValue,
    id,
    inputClassName,
    options
}: selectType) => {
    const [val, setVal] = useState(inputValue);
    
    const listOptions: Options[] = (typeof options === 'object')
        ? formatSingleOptions(options)
        : (typeof options === 'string')
            ? JSON.parse(options)
            : [];

    return (
        <div className="selectInput">
            <label htmlFor={inputName}>{label}</label>
            <select 
                id={id}
                className={`${inputName} ${inputClassName}`}
                name={inputName}
                onChange={e => setVal(e.target.value)}
                value={val}
            >
                {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                    <option key={i} value={key}>{value}</option>
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
