import React, { useState } from 'react';
import useAddToArray from '../../hooks/useAddToArray';
import Options from '../../types/Options';

const AddOptions = ({
    inputName,
    inputValue,
    inputClassName
}: any) => {
    const {array, setValue, deleteValue} = useAddToArray(inputValue);
    const [val, setVal] = useState('');
  
    return (
        <div className="selectInput">
            <label htmlFor={inputName}>Options</label>
            <div>
                <ul>
                    {array && array.map((option: Options, index: number) => 
                        <li key={index}>
                            key={option.key}, value={option.value} <span onClick={() => deleteValue(option.key)}>x</span>
                        </li>
                    )}
                </ul>
                <input
                    type='text'
                    className={inputClassName}
                    onChange={({target: {value}}: any) => setVal(value)}
                    value={val}
                />
                <input type="hidden" name={inputName} value={JSON.stringify(array)} />
                <span onClick={() => {setValue(val); setVal('')}}>+</span>
                <p>Format: 'key, value' or simply 'value'</p>
            </div>
        </div>
    );
}

AddOptions.defaultProps = {
    id: '',
    inputValue: '',
    inputClassName: '',
    panelName: ''
};

export default AddOptions;
