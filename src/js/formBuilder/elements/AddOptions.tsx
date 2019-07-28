import React, { useState } from 'react';
import useAddToArray from '../../hooks/useAddToArray';
import Options from '../../types/Options';
import Label from '../styles/label';
import Div from '../styles/div';
import Input from '../styles/input';

const AddOptions = ({
    inputName,
    inputValue,
    inputClassName
}: any) => {
    const {array, setValue, deleteValue} = useAddToArray(inputValue);
    const [val, setVal] = useState('');
  
    return (
        <Div className="selectInput">
            <Label htmlFor={inputName}>Options</Label>
            <Div>
                <ul>
                    {array && array.map((option: Options, index: number) => 
                        <li key={index}>
                            key={option.key}, value={option.value} <span onClick={() => deleteValue(option.key)}>x</span>
                        </li>
                    )}
                </ul>
                <Input
                    type='text'
                    className={inputClassName}
                    onChange={({target: {value}}: any) => setVal(value)}
                    value={val}
                />
                <input type="hidden" name={inputName} value={JSON.stringify(array)} />
                <span onClick={() => {setValue(val); setVal('')}}>+</span>
                <p>Format: 'key, value' or simply 'value'</p>
            </Div>
        </Div>
    );
}

AddOptions.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    panelName: ''
};

export default AddOptions;
