import React from 'react';
import {ComponentListType} from '../types/ComponentListType';
import ConsiseDraggableInputs from '../utilities/ConciseDraggableInputs';

type Props = {
    componentList: ComponentListType,
    state: any
};

const Panels = ({state, componentList}: Props) => {
    return (
        <>
            {ConsiseDraggableInputs(componentList).map((key: string) => {
                const Component = componentList[key];

                if (!Component.Panel) {
                    console.error(`Component ${key}: No panel Provided in object`);
                    return null;
                }

                return <Component.Panel 
                    key={key} 
                    connected={state.panelData.id}
                    panel={state.panel} 
                    panelData={state.inputs[state.panelData.id]}
                />;
            })}
        </>
    );
};

export default Panels;
