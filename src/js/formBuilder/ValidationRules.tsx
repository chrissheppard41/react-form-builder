import React from 'react';

const ValidationRules = ({
    validation,
}: any) =>
    <div className="validationRules">
        {validation.length !== 0 && 
            validation.map((val: string, key: number): any => 
                <div key={key} className="rule">{val}</div>
            )
        }
    </div>;
        
export default ValidationRules;
