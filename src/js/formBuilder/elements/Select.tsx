import React from 'react';
import {selectType} from '../../types/inputType';
import Options from '../../types/Options';
import {optionsList} from '../../utilities/OptionBuild';
import useMultiSelect from '../../hooks/useMultiSelect';
import ClassificationInputs from '../../constants/ClassificationInputs';
import { useStateValue } from '../../context/FormContext';
import useValidationRequire from '../../hooks/useValidationRequire';
import useValidationAtLeast from '../../hooks/useValidationAtLeast';
import ValidationRules from '../ValidationRules';

const Select = ({
    label,
    inputName,
    inputValue,
    id,
    inputClassName,
    options,
    multiselect,
    disableChild,
    validation
}: selectType) => {
    const {actions}: any = useStateValue();
    const listOptions: Options[] = optionsList(options);
    const mutliple: boolean = (typeof multiselect === 'object')
        ? multiselect.includes("Yes")
        : multiselect;
    const {array, checkMultiple} = useMultiSelect(inputValue, '');
    const {requiredMessage, require} = useValidationRequire(validation, array.toString(), id, actions.addValidation, actions.removeValidation);
    const {atLeastMessage, atLeast} = useValidationAtLeast(validation, array, id, actions.addValidation, actions.removeValidation);

    if(!disableChild) {
        actions.enableChildren(id, array);
    }

    return (
        <div className="selectInput">
            <label htmlFor={inputName}>{label}</label>
            <select 
                id={id}
                className={`${inputName} ${inputClassName} ${require} ${atLeast}`}
                name={inputName}
                value={mutliple ? array : array[0]}
                onChange={e => checkMultiple(e.target.options)}
                multiple={mutliple}
            >
                <option value={''}>Select</option>
                {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                    <option 
                        key={i} 
                        value={key}
                        selected={array.includes(key)}
                    >{value}</option>
                )}
            </select>
            <ValidationRules 
                validation={[requiredMessage, atLeastMessage]}
            />
        </div>
    );
}

Select.defaultProps = {
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
    multiselect: false,
    selectType: ''
};

export default Select;
