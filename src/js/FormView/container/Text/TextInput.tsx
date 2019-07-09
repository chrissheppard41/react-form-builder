import React from 'react';
import { useDrag } from 'react-dnd';
import ClassificationInputs from '../../../constants/ClassificationInputs';

export interface BoxProps {
  name: string,
  inputs: any,
  addInput: (test: string) => void,
  className: string,
}

/*interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}*/

const TextInput = ({name, addInput, className}: any) => {
  const item = { name, type: 'box' };
  const [{ opacity }, drag] = useDrag({
    item,
    end(/*dropResult?: DropResult*/) {
      addInput({type: ClassificationInputs.TEXT, label: 'text input', validation: {}});
    },
    collect: (monitor: any) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  })

  return (
    <div className={className} ref={drag} style={{opacity }}>
      {name}
    </div>
  )
}

export default TextInput;
