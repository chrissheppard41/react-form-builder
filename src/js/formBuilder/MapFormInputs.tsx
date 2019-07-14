import React from 'react';
import ClassificationInputs from '../constants/ClassificationInputs';
import {inputType} from '../types/inputType';
import {inputRow} from '../Interfaces/inputSet';
import Text from './elements/Text';
import {ValidationType} from '../types/validationType';
import InputFormContainer from './InputFormContainer';

interface Props {
    inputs: inputRow,
    submit: (e: any) => void,
    error: boolean,
    validation: ValidationType,
};

const MapFormInputs = (
    {inputs, submit, error, validation}: Props,
) => 
    <form name="formBuilder" className={(error) ? 'error' : ''}>
        {Object.keys(inputs).map((index: string, key: number) => {
            const {
                parentClassName,
                type,
            }: inputType = inputs[index];

            return <InputFormContainer 
                key={key} 
                classes={parentClassName || ''}
                validation={validation[index] || []}
            >
                {(ClassificationInputs.TEXT === type ||
                ClassificationInputs.EMAIL === type ||
                ClassificationInputs.NUMBER === type) && (
                    <Text
                        id={index}
                        {...inputs[index]}
                    />
                )}
            </InputFormContainer>;
        })}
        <input type="submit" value="Submit" onClick={submit} />
    </form>
        
export default MapFormInputs;
