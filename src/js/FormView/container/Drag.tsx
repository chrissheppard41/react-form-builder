import React from 'react';
import {useDrag} from 'react-dnd';
import DragTypes from '../../constants/DragTypes';

export interface BoxProps {
  children: any,
  className: string,
  input: string,
  name: string,
  connected: string,
}

const Drag = ({children, className, input, name, connected}: any) => {
  const item = {
    name, 
    type: DragTypes.BOX,
    data: {
      type: input, 
      label: name, 
      validation: {},
      connected: connected,
      enableChildren: (connected === '')
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

export default Drag;
