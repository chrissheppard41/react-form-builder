import React from 'react';
import {useDrag} from 'react-dnd';
import DragTypes from '../../constants/DragTypes';

export interface BoxProps {
  children: any,
  className: string,
  input: string,
  name: string,
  connected: string,
  overrideDropzone: boolean,
  overridePanel: boolean
}

const Drag = ({children, className, input, name, connected, overrideDropzone, overridePanel}: any) => {
  const item = {
    name, 
    type: DragTypes.BOX,
    data: {
      type: input, 
      label: name, 
      validation: {},
      connected: connected,
      enableChildren: (connected === ''),
      overrideDropzone,
      overridePanel
    }
  };

  const [{ opacity }, drag] = useDrag({
    item,
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  return (
    <div className={`drag ${className}`} ref={drag} style={{opacity}}>
      {children}
    </div>
  )
}

Drag.defaultProps = {
  overrideDropzone: false,
  overridePanel: false,
};

export default Drag;
