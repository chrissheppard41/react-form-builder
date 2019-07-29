import React from "react";
import ClassificationInputs from "../../../constants/ClassificationInputs";
import ClassificationPanel from "../../../constants/ClassificationPanel";
import Drag from "../Drag";

export interface BoxProps {
  className: string;
  connected: string;
}

const TextInput = ({ className, connected }: any) => {
  const name = "Textarea component";

  return (
    <Drag
      className={className}
      name={name}
      connected={connected}
      input={ClassificationInputs.TEXTAREA}
      panelName={ClassificationPanel.TEXTAREAPANEL}
    >
      {name}
    </Drag>
  );
};

export default TextInput;
