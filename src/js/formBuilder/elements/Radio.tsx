import React, {useState} from 'react';
import {radioType} from '../../types/inputType';
import Options from '../../types/Options';
import {optionsList} from '../../utilities/OptionBuild';

const Radio = ({
    label,
    type,
    inputName,
    inputValue,
    id,
    inputClassName,
    options
}: radioType) => {
    const [val, setVal] = useState(inputValue);
    const listOptions: Options[] = optionsList(options);

    return (
        <div className="radioInput">
            <label htmlFor={inputName}>{label}</label>
            {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                <>
                    <input 
                        key={i} 
                        type={type}
                        name={inputName}
                        className={`${inputClassName}`}
                        id={id}
                        value={key}
                        checked={val === key}
                        onChange={e => setVal(e.target.value)}
                    /> {value}
                </>
            )}
        </div>
    );
}

Radio.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
    panelName: ''
};

export default Radio;
