import React, {useState} from 'react';
import {inputType} from '../../types/inputType';
import ValidationRules from '../ValidationRules';
import useValidationRequire from '../../hooks/useValidationRequire';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
`;
const Label = styled.label`
  width: 100%;
  margin: 6px 0;
  display: block;
`;
const Input = styled.input`
  width: 60%;
  margin: 6px 0;
  display: block;
`;

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
    const {message, require} = useValidationRequire(validation, val, id);

    return (
        <Div className="textInput">
            <Label htmlFor={inputName}>{label}{require && ` *`}</Label>
            <Input
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
        </Div>
    );
}

Text.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
    connected: ''
};

export default Text;
