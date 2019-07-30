import React, { Fragment } from "react";
import { useDrop } from "react-dnd";
import { useStateValue } from "../context/FormContext";
import Inputs from "./Inputs";
import ListEmpty from "../utilities/ListEmpty";
import DragTypes from "../constants/DragTypes";

export interface DustbinProps {
  allowedDropEffect: string;
  classNames: any;
  connected: string;
}

function selectBackgroundColor(isActive: boolean, canDrop: boolean) {
  if (isActive) {
    return "#00ab00";
  } else if (canDrop) {
    return "darkkhaki";
  } else {
    return "#222";
  }
}

const Dropzone: React.FC<DustbinProps> = ({
  allowedDropEffect,
  classNames,
  connected
}) => {
  const { state, actions }: any = useStateValue();
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DragTypes.BOX,
    collect: (monitor: any) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    }),
    drop: (item: any) => {
      actions.addInput({ ...item.data, connected });

      return {
        allowedDropEffect,
        name: `${allowedDropEffect} Dustbin`
      };
    }
  });

  const isActive = canDrop && isOver;
  const borderColor = `${selectBackgroundColor(isActive, canDrop)}`;
  const inputItems = Object.keys(state.inputs);

  return (
    <ul className="dropzoneUl" style={{ borderColor }}>
      {!ListEmpty(state.inputs, connected) && (
        <li className="empty">List empty</li>
      )}
      {state.inputs &&
        inputItems.map((id: string, key: number) => (
          <Fragment key={key}>
            {state.inputs[id].connected === connected && (
              <>
                <Inputs key={key} index={key} inputFields={state.inputs[id]} />
                {!state.inputs[id].overrideDropzone && (
                  <li key={state.inputs[id].id} className={classNames}>
                    <Dropzone
                      allowedDropEffect="copy"
                      classNames="child-dropables"
                      connected={state.inputs[id].id}
                    />
                  </li>
                )}
              </>
            )}
          </Fragment>
        ))}
      <li className="dropzoneLi" ref={drop} style={{ borderColor }}>
        <p>{isActive ? "Release to drop" : "Drag a box here"}</p>
      </li>
    </ul>
  );
};
export default Dropzone;
