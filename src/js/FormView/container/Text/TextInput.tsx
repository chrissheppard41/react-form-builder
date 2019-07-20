import React from 'react';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import Drag from '../Drag';

export interface BoxProps {
  className: string,
  connected: string,
}

const TextInput = ({className, connected}: any) => {
  const name = "Text input component";

  return (
    <Drag 
      className={className} 
      name={name} 
      connected={connected}
      input={ClassificationInputs.TEXT}
    >
      {name}
    </Drag>
  )
}

export default TextInput;
