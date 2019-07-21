import React from 'react';
import {ComponentListType} from '../types/ComponentListType';
import ConsiseFraggableInputs from '../utilities/ConciseDraggableInputs';

type Props = {
    componentList: ComponentListType,
    classNames: string,
    connected: string
};

const Draggables = ({componentList, classNames, connected}: Props) => 
    (
        <div className={classNames}>
            <h3>Dragable component</h3>
            {ConsiseFraggableInputs(componentList).map((key: string) => {
                const Component = componentList[key];

                if (!Component.Draggable) {
                    console.error(`Component ${key}: No draggable Provided in object`);
                    return null;
                }

                return <Component.Draggable
                    key={key} 
                    connected={connected}
                    className="drag-element"
                />;
            })}
        </div>
    );

export default Draggables;
