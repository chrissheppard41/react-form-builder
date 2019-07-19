import React from 'react';
import { useDrag } from 'react-dnd';
import ClassificationInputs from '../../../constants/ClassificationInputs';

export interface BoxProps {
  className: string,
  connected: string,
}

const TextInput = ({className, connected}: any) => {
  const name = "Test Input text";
  const item = {
    name, 
    type: 'box',
    data: {
      type: ClassificationInputs.TEXT, 
      label: 'text input', 
      validation: {},
      connected: connected,
    }
  };
  const [{ opacity }, drag] = useDrag({
    item,
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  return (
    <div className={className} ref={drag} style={{opacity}}>
      {name}
    </div>
  )
}

export default TextInput;
