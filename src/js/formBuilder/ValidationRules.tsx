import React from 'react';

const ValidationRules = ({
    validation,
}: any) =>
    <div className="validationRules">
        {Object.keys(validation).length !== 0 && 
            Object.keys(validation).map((val: string, key: number): any => 
                <div key={key} className={val}>{validation[val].message}</div>
            )
        }
    </div>;
        
export default ValidationRules;
