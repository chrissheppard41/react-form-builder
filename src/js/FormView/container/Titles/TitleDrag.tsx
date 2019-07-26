import React from 'react';
import ClassificationInputs from '../../../constants/ClassificationInputs';
import ClassificationPanel from '../../../constants/ClassificationPanel';
import Drag from '../Drag';

export interface BoxProps {
  className: string,
  connected: string,
}

const TitleDrag = ({className, connected}: any) => {
  const name = "Title component";

  return (
    <Drag 
      className={className} 
      name={name} 
      connected={connected}
      input={ClassificationInputs.TITLE}
      overrideDropzone={true}
      panelName={ClassificationPanel.TITLEPANEL}
    >
      {name}
    </Drag>
  )
}

export default TitleDrag;
