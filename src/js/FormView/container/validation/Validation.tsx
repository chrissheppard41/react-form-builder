import React from 'react';

interface Props {
    children: any,
    name: string,
    enabled: boolean,
    setEnabled: any,
    inputName: string
};

const Validation = ({children, name, inputName, enabled, setEnabled}: Props): any =>
    (
        <div className="validation-input">
            <h6>{name}</h6>
            Enable: <input 
                type="checkbox" 
                className="validation" 
                name={inputName}
                id="enabled"
                onChange={() => setEnabled(!enabled)}
                defaultChecked={enabled}
            />
            {enabled && 
            <>
                {children}
            </>
            }
        </div>
    );

Validation.defaultProps = {
    values: {},
};

export default Validation;
