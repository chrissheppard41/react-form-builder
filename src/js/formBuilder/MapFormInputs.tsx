import React from 'react';
import {inputType} from '../types/inputType';
import {inputRow} from '../Interfaces/inputSet';
import {ValidationType} from '../types/validationType';
import {ComponentListType} from '../types/ComponentListType';
import InputFormContainer from './InputFormContainer';

interface Props {
    inputs: inputRow,
    submit: (e: any) => void,
    error: boolean,
    validation: ValidationType,
    componentList: ComponentListType
};

const MapFormInputs = (
    {inputs, submit, error, validation, componentList}: Props,
) => 
    <form name="formBuilder" className={(error) ? 'error' : ''}>
        {Object.keys(inputs).map((index: string, key: number) => {
            const {
                parentClassName,
                type,
            }: inputType = inputs[index];
            const Component = componentList[type];

            if (Component === undefined) {
                return <div>Error adding component</div>;
            }

            return <InputFormContainer
                key={key} 
                classes={parentClassName || ''}
                validation={validation[index] || []}
            >
                <Component.Input
                    id={index}
                    {...inputs[index]}
                />
            </InputFormContainer>;
        })}
        <input type="submit" value="Submit" onClick={submit} />
    </form>
        
export default MapFormInputs;
