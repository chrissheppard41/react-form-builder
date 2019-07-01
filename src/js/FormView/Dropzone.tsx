import React from 'react'
import { useDrop } from 'react-dnd'

export interface DustbinProps {
  allowedDropEffect: string,
  children: any,
}

function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
  if (isActive) {
    return 'darkgreen'
  } else if (canDrop) {
    return 'darkkhaki'
  } else {
    return '#222'
  }
}

const Dropzone: React.FC<DustbinProps> = ({ allowedDropEffect, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: () => {
        return {
            name: `${allowedDropEffect} Dustbin`,
            allowedDropEffect,
        };
    },
    collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  const border = `5px dashed ${selectBackgroundColor(isActive, canDrop)}`;

  return (
    <div className="form-dropzone" ref={drop} style={{ border }}>
      <p>{`Works with ${allowedDropEffect} drop effect`}</p>
      {children}
      <p>{isActive ? 'Release to drop' : 'Drag a box here'}</p>
      <p>{isActive && <div className="form-drop-area">Drag and Drop here</div>}</p>
    </div>
  )
}
export default Dropzone;
