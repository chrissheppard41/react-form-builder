import React, { Fragment } from 'react';
import { useDrop } from 'react-dnd';
import {useStateValue} from '../context/FormContext';
import Inputs from './Inputs';
import ListEmpty from '../utilities/ListEmpty';
import styled from 'styled-components';
import DragTypes from '../constants/DragTypes';

const Ul = styled.ul`
  width: calc(100% - 6px);
  list-style-type: none;
  border: 2px solid #666;
  border-radius: 3px;
  margin: 3px;
`;

const DropLi = styled.li`
  border-top: 2px dashed #666;
`;

const EmptyLi = styled.li`
  padding: 10px;
`;

export interface DustbinProps {
  allowedDropEffect: string,
  classNames: any,
  connected: string,
}

function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
  if (isActive) {
    return '#00ab00';
  } else if (canDrop) {
    return 'darkkhaki';
  } else {
    return '#222';
  }
}

const Dropzone: React.FC<DustbinProps> = ({allowedDropEffect, classNames, connected}) => {
  const {state, actions}: any = useStateValue();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DragTypes.BOX,
    drop: (item: any) => {
      actions.addInput({...item.data, connected});

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
  const borderColor = `${selectBackgroundColor(isActive, canDrop)}`;
  const inputItems = Object.keys(state.inputs);

  return (
    <Ul style={{borderColor}}>
      {!ListEmpty(state.inputs, connected) && <EmptyLi>List empty</EmptyLi>}
      {state.inputs && inputItems.map((id: string, key: number) =>
        <Fragment key={key}>
          {state.inputs[id].connected === connected &&
            <>
              <Inputs
                  key={key}
                  index={key}
                  inputFields={state.inputs[id]}
              />
              <li key={state.inputs[id].id} className={classNames}>
                <Dropzone
                    allowedDropEffect="copy"
                    classNames="child-dropables"
                    connected={state.inputs[id].id}
                />
              </li>
            </>
          }
        </Fragment>
        )}
      <DropLi ref={drop} style={{borderColor}}>
        <p>{isActive ? 'Release to drop' : 'Drag a box here'}</p>
      </DropLi>
    </Ul>
  )
}
export default Dropzone;
