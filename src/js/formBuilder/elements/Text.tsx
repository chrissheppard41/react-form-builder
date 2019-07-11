import React, {useState} from 'react';
import {inputType} from '../../types/inputType';
import ValidationRules from '../ValidationRules';
import useValidationRequire from '../../hooks/useValidationRequire';

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
    const {message, require} = useValidationRequire(validation, val);

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
                required={require}
            />
            <ValidationRules 
                validation={[message]}
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
