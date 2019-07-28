import React from 'react';
import Div from './styles/div';

const ValidationRules = ({
    validation,
}: any) =>
    <Div className="validationRules">
        {validation.length !== 0 && 
            validation.map((val: string, key: number): any => 
                <Div key={key} className="rule">{val}</Div>
            )
        }
    </Div>;
        
export default ValidationRules;
