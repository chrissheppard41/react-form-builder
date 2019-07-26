import React, { useState } from 'react';
import useAddToArray from '../../hooks/useAddToArray';

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
                    {array && array.map((value: string, index: number) => 
                        <li key={index}>
                            {value} <span onClick={() => deleteValue(value)}>x</span>
                        </li>
                    )}
                </ul>
                <input
                    type='text'
                    className={inputClassName}
                    onChange={({target: {value}}: any) => setVal(value)}
                    value={val}
                />
                <input type="hidden" name={inputName} value={array} />
                <span onClick={() => {setValue(val); setVal('')}}>+</span>
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
