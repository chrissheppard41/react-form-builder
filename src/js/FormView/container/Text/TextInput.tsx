import React from 'react';
import { useDrag } from 'react-dnd';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import {useStateValue} from '../../../context/FormContext';

export interface BoxProps {
  name: string,
  inputs: any,
  className: string,
}

const TextInput = ({name, className}: any) => {
  const {actions}: any = useStateValue();
  const item = { name, type: 'box' };
  const [{ opacity }, drag] = useDrag({
    item,
    end(/*dropResult?: DropResult*/) {
      actions.addInput({type: ClassificationInputs.TEXT, label: 'text input', validation: {}});
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
