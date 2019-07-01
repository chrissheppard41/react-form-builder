import React, {useState} from 'react';

type Props = {
    label: string,
    className: string,
    name: string,
    value: string,
};

const Text = ({
    label,
    className,
    name,
    value,
}: Props) => {
    const [val, setVal] = useState(value);
  
    return (
        <div className="textInput">
            <label htmlFor={name}>{label}</label>
            <input 
                type="text" 
                name={name} 
                className={className} 
                value={val}
                onChange={e => setVal(e.target.value)}
            />
        </div>
    );
}

export default Text;
