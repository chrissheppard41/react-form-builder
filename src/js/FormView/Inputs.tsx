import React, {useRef} from 'react';
import {useStateValue} from '../context/FormContext';
import {useDrag, useDrop} from 'react-dnd';
import {XYCoord} from 'dnd-core';
import styled from 'styled-components';
import ModalNames from '../constants/ModalNames';

const InputLi = styled.li`
  width: calc(100% - 6px);
  margin: 3px;
`;

interface Props {
    inputFields: any,
    index: number,
};

interface DragItem {
  index: number
  id: string
  type: string
}

const Inputs = ({index, inputFields}: Props) => {
    const {actions}: any = useStateValue();
    const group = (inputFields.connected) ? inputFields.connected : 'Card';

    const ref = useRef<HTMLScriptElement>(null);
    const [{hovered}, drop] = useDrop({
      accept: group,
      hover: (item: DragItem, monitor: any) => {
        if (!ref.current) {return;}
        const dragIndex = item.index;
        const hoverIndex = index;
  
        if (dragIndex === hoverIndex) {return;}
  
        const hoverBoundingRect = ref.current!.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
  
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {return;}
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {return;}
        
        item.index = hoverIndex;
      },
      drop: (item: DragItem) => {
        if (item.index === index) {return;}
        actions.moveInput(item.index, index);

      },
      collect: (monitor: any) => ({
        getDropItem: monitor.getItem(),
        hovered: monitor.isOver(),
      }),
    });

    const [{isDragging}, drag] = useDrag({
        item: {type: group, id: inputFields.id, index, lock: true},
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      });
      
    drag(drop(ref));
    const opacity = hovered
        ? 0
        : 1;
    
    return (
        //@ts-ignore
        <InputLi className={`drag-element${isDragging ? ' isDragging' : ''}`} ref={ref} style={{opacity}}>
            {inputFields.label}
            <div>
                <button onClick={() => actions.editInput(inputFields.id)}>Edit</button>
                <button onClick={() => actions.manageModals(ModalNames.DELETE, {id: inputFields.id})}>Delete</button>
            </div>
        </InputLi>
    );
};

export default Inputs;
