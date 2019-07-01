import React, {useState} from 'react';

type Props = {
    label: string,
    className: string,
    name: string,
    value: string,
    options: Array<string>,
};

const Select = ({
    label,
    className,
    name,
    value,
    options,
}: Props) => {
    const [val, setVal] = useState(value);
  
    return (
        <div className="selectInput">
            <label htmlFor={name}>{label}</label>
            <select 
                id={name}
                className={`${name} ${className}`}
                onChange={e => setVal(e.target.value)}
                value={val}
            >
                {options.map((option: string, i: number) =>
                    <option key={i} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default Select;
