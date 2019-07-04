import React, { Fragment } from 'react';
import ClassificationInputs from '../constants/ClassificationInputs';
import {inputType} from '../types/inputType';
import {IInputSet} from '../Interfaces/inputSet';

const MapFormInputs = ({
    inputs,
}: IInputSet) => 
    <form>
        {Object.keys(inputs).map((index: string, key: number) => {
            const {
                parentClassName,
                type,
                label,
                inputId,
                inputName,
                inputValue,
                inputClassName,
            }: inputType = inputs[index];

            return <div key={key} className={`inputContainer ${parentClassName}`}>
                {(ClassificationInputs.TEXT === type ||
                ClassificationInputs.EMAIL === type) && (
                    <Fragment>
                        <label htmlFor={inputName}>{label}</label>
                        <input 
                            type={type}
                            id={inputId}
                            name={inputName}
                            value={inputValue}
                            className={inputClassName}
                        />
                    </Fragment>
                )}
            </div>;
        })}
    </form>
        
export default MapFormInputs;
