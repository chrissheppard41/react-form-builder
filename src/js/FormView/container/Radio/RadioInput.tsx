import React from 'react';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import Drag from '../Drag';

export interface BoxProps {
  className: string,
  connected: string,
}

const RadioInput = ({className, connected}: any) => {
  const name = "Radio input component";
  
  return (
    <Drag 
      className={className} 
      name={name} 
      connected={connected}
      input={ClassificationInputs.RADIO}
      panelName={ClassificationPanel.RADIOPANEL}
    >
      {name}
    </Drag>
  )
}

export default RadioInput;
