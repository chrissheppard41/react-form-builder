import React from 'react';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import Drag from '../Drag';

export interface BoxProps {
  className: string,
  connected: string,
}

const H3Drag = ({className, connected}: any) => {
  const name = "H3 component";

  return (
    <Drag 
      className={className} 
      name={name} 
      connected={connected}
      input={ClassificationInputs.H3}
      overrideDropzone={true}
    >
      {name}
    </Drag>
  )
}

export default H3Drag;
