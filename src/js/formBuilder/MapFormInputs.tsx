import React, { Fragment } from 'react';
import ClassificationInputs from '../constants/ClassificationInputs';
import {inputType} from '../types/inputType';
import {inputRow} from '../Interfaces/inputSet';
import Text from './elements/Text';

interface Props {
    inputs: inputRow,
    submit: (e: any) => void,
    error: boolean,
};

const MapFormInputs = (
    {inputs, submit, error}: Props,
) => 
    <form name="formBuilder" className={(error) ? 'error' : ''}>
        {Object.keys(inputs).map((index: string, key: number) => {
            const {
                parentClassName,
                type,
                label,
                inputName,
                inputValue,
                inputClassName,
                validation,
            }: inputType = inputs[index];

            return <div key={key} className={`inputContainer${parentClassName ? ` ${parentClassName}` : ''}`}>
                {(ClassificationInputs.TEXT === type ||
                ClassificationInputs.EMAIL === type ||
                ClassificationInputs.NUMBER === type) && (
                    <Fragment>
                        <Text 
                            label={label}
                            type={type}
                            id={index}
                            inputName={inputName}
                            inputValue={inputValue}
                            inputClassName={inputClassName}
                            validation={validation}
                        />
                    </Fragment>
                )}
            </div>;
        })}
        <input type="submit" value="Submit" onClick={submit} />
    </form>
        
export default MapFormInputs;
