import React, {Fragment} from 'react';
import {radioType} from '../../types/inputType';
import Options from '../../types/Options';
import {optionsList} from '../../utilities/OptionBuild';
import ClassificationInputs from '../../constants/ClassificationInputs';
import useMultiSelect from '../../hooks/useMultiSelect';
//import useAddToSet from '../../hooks/useAddToSet';

const Radio = ({
    label,
    type,
    inputName,
    inputValue,
    id,
    inputClassName,
    options,
    fromPanel
}: radioType) => {
    const {array, check} = useMultiSelect(inputValue, type);
    const listOptions: Options[] = optionsList(options);

    return (
        <div className="radioInput">
            <label htmlFor={inputName}>{label}</label>
            {listOptions && listOptions.map(({key, value}: Options, i: number) =>
                <Fragment key={i}>
                    <input 
                        type={type}
                        name={`${inputName}${(!fromPanel && type === ClassificationInputs.CHECKBOX) ? i : ''}`}
                        className={`${inputClassName}`}
                        id={id}
                        value={key}
                        checked={array.includes(key)}
                        onChange={e => check(e.target.value)}
                    /> {value}
                </Fragment>
            )}
        </div>
    );
}

Radio.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    validation: {},
    panelName: '',
    fromPanel: false
};

export default Radio;
