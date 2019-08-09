import React from "react";
import {Drag} from "react-form-builder-cs";

export interface BoxProps {
  className: string;
  connected: string;
}

const ToggleDrag = ({ className, connected }: BoxProps) => {
  const name = "Toggle component";

  return (
    <Drag
      className={className}
      name={name}
      connected={connected}
      input="Toggle"
      panelName="TogglePanel"
    >
      {name}
    </Drag>
  );
};

export default ToggleDrag;
