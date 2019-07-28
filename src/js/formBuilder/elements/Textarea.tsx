import React, {useState} from 'react';
import {textareaType} from '../../types/inputType';
import ValidationRules from '../ValidationRules';
import useValidationRequire from '../../hooks/useValidationRequire';
import {useStateValue} from '../../context/FormContext';
import styled from 'styled-components';
import ClassificationInputs from '../../constants/ClassificationInputs';

const Div = styled.div`
  width: 100%;
`;
const Label = styled.label`
  width: 100%;
  margin: 6px 0;
  display: block;
`;
const Input = styled.textarea`
  width: 60%;
  margin: 6px 0;
  display: block;
`;

const Textarea = ({
    label,
    id,
    inputName,
    inputValue,
    inputClassName,
    validation,
    cols,
    rows,
    disableChild
}: textareaType) => {
    const {actions}: any = useStateValue();
    const [val, setVal] = useState(inputValue);
    const {requiredMessage, require} = useValidationRequire(validation, val, id, actions.addValidation, actions.removeValidation);
    if(!disableChild) {
        actions.enableChildren(id, val);
    }

    return (
        <Div className="textareaInput">
            <Label htmlFor={inputName}>{label}{require && ` *`}</Label>
            <Input
                name={inputName}
                className={`${inputClassName}`}
                id={id}
                cols={cols}
                rows={rows}
                value={val}
                onChange={e => setVal(e.target.value)}
                required={require}
            />
            <ValidationRules 
                validation={[requiredMessage]}
            />
        </Div>
    );
}

Textarea.defaultProps = {
    id: '',
    inputName: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
    connected: '',
    enableChildren: false,
    disableChild: false,
    panelName: '',
    parentClassName: '',
    label: '',
    type: ClassificationInputs.TEXTAREA,
    inputType: '',
    fromPanel: false
};

export default Textarea;
