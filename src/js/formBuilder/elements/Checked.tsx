import React, {Fragment} from 'react';
import {radioType} from '../../types/inputType';
import Options from '../../types/Options';
import {optionsList} from '../../utilities/OptionBuild';
import ClassificationInputs from '../../constants/ClassificationInputs';
import useMultiSelect from '../../hooks/useMultiSelect';
import { useStateValue } from '../../context/FormContext';
import ValidationRules from '../ValidationRules';
import useValidationAtLeast from '../../hooks/useValidationAtLeast';
import useValidationRequire from '../../hooks/useValidationRequire';
import Label from '../styles/label';
import Div from '../styles/div';

const Checked = ({
    label,
    type,
    inputName,
    inputValue,
    id,
    inputClassName,
    options,
    fromPanel,
    validation,
    disableChild
}: radioType) => {
    const {actions}: any = useStateValue();
    const {array, check} = useMultiSelect(inputValue, type);
    const listOptions: Options[] = optionsList(options);
    const {requiredMessage, require} = useValidationRequire(validation, array.toString(), id, actions.addValidation, actions.removeValidation);
    const {atLeastMessage, atLeast} = useValidationAtLeast(validation, array, id, actions.addValidation, actions.removeValidation);

    if(!disableChild) {
        actions.enableChildren(id, array);
    }

    return (
        <Div className="checkedInput">
            <Label htmlFor={inputName}>{label}{require && ` *`}</Label>
            {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                <Fragment key={i}>
                    <input 
                        type={type}
                        name={`${inputName}${(!fromPanel && type === ClassificationInputs.CHECKBOX) ? i : ''}`}
                        className={`${inputClassName} ${require} ${atLeast}`}
                        id={id}
                        value={key}
                        checked={array.includes(key)}
                        onChange={e => check(e.target.value)}
                    /> {value}
                </Fragment>
            )}
            <ValidationRules 
                validation={[requiredMessage, atLeastMessage]}
            />
        </Div>
    );
}

Checked.defaultProps = {
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
    type: ClassificationInputs.SELECT,
    inputType: '',
    fromPanel: false,
    options: '',
    selectType: ''
};

export default Checked;
