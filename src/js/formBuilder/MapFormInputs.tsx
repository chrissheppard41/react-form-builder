import React, { Fragment } from 'react';
import ClassificationInputs from '../constants/ClassificationInputs';
import {inputType} from '../types/inputType';
import {IInputSet} from '../Interfaces/inputSet';
import Text from './elements/Text';

const MapFormInputs = (
    {inputs}: IInputSet,
) => 
    <form>
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

            return <div key={key} className={`inputContainer ${parentClassName}`}>
                {(ClassificationInputs.TEXT === type ||
                ClassificationInputs.EMAIL === type ||
                ClassificationInputs.NUMBER === type) && (
                    <Fragment>
                        <Text 
                            label={label}
                            type={type}
                            id={key.toString()}
                            inputName={inputName}
                            inputValue={inputValue}
                            inputClassName={inputClassName}
                            validation={validation}
                        />
                    </Fragment>
                )}
            </div>;
        })}
    </form>
        
export default MapFormInputs;
