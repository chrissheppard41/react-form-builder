import React, {useState} from 'react';
import {inputType} from '../../types/inputType';
import ValidationRules from '../ValidationRules';
import useValidationRequire from '../../hooks/useValidationRequire';
import {useStateValue} from '../../context/FormContext';
import useValidationEmail from '../../hooks/useValidationEmail';
import useValidationMinMax from '../../hooks/useValidationMinMax';
import Label from '../styles/label';
import Div from '../styles/div';
import Input from '../styles/input';

const Text = ({
    label,
    type,
    id,
    inputName,
    inputValue,
    inputClassName,
    validation,
    disableChild
}: inputType) => {
    const {actions}: any = useStateValue();
    const [val, setVal] = useState(inputValue);
    const {requiredMessage, require} = useValidationRequire(validation, val, id, actions.addValidation, actions.removeValidation);
    const {emailMessage, email} = useValidationEmail(validation, val, id, actions.addValidation, actions.removeValidation);
    const {numberMessage, number} = useValidationMinMax(validation, val, id, actions.addValidation, actions.removeValidation);
    if(!disableChild) {
        actions.enableChildren(id, val);
    }

    return (
        <Div className="textInput">
            <Label htmlFor={inputName}>{label}{require && ` *`}</Label>
            <Input
                type={type}
                name={inputName}
                className={`${inputClassName} ${email} ${number}`}
                id={id}
                value={val}
                onChange={e => setVal(e.target.value)}
                required={require}
            />
            <ValidationRules 
                validation={[requiredMessage, emailMessage, numberMessage]}
            />
        </Div>
    );
}

Text.defaultProps = {
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
    type: '',
    inputType: '',
    fromPanel: false
};

export default Text;
