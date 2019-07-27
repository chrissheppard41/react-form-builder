import React from 'react';
import {selectType} from '../../types/inputType';
import Options from '../../types/Options';
import {optionsList} from '../../utilities/OptionBuild';
import useMultiSelect from '../../hooks/useMultiSelect';

const Select = ({
    label,
    inputName,
    inputValue,
    id,
    inputClassName,
    options,
    multiselect
}: selectType) => {
    const listOptions: Options[] = optionsList(options);
    const mutliple: boolean = (typeof multiselect === 'object')
        ? multiselect.includes("Yes")
        : multiselect;
    const {array, checkMultiple} = useMultiSelect(inputValue, '');

    return (
        <div className="selectInput">
            <label htmlFor={inputName}>{label}</label>
            <select 
                id={id}
                className={`${inputName} ${inputClassName}`}
                name={inputName}
                value={mutliple ? array : array[0]}
                onChange={e => checkMultiple(e.target.options)}
                multiple={mutliple}
            >
                {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                    <option 
                        key={i} 
                        value={key}
                        selected={array.includes(key)}
                    >{value}</option>
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
    panelName: '',
    multiselect: false
};

export default Select;
