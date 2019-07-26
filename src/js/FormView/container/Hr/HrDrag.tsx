import React from 'react';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import Drag from '../Drag';

export interface BoxProps {
  className: string,
  connected: string,
}

const DivContainer = ({className, connected}: any) => {
  const name = "Hr component";

  return (
    <Drag 
      className={className} 
      name={name} 
      connected={connected}
      input={ClassificationInputs.HR}
      overrideDropzone={true}
      overridePanel={true}
    >
      {name}
    </Drag>
  )
}

export default DivContainer;
