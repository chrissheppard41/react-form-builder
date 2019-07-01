import React, { Fragment } from 'react';

type Props = {
    inputs: {
        [id: string] : any,
    },
}

const MapFormInputs = ({
    inputs,
}: Props) => 
    <Fragment>
        {Object.keys(inputs).map(({parentClassName}: any, key) => 
            <div key={key} className={parentClassName}>
                hello
            </div>
        )}
    </Fragment>
        
export default MapFormInputs;
