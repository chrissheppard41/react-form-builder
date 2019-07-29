import React from "react";
import ClassificationInputs from "../../../constants/ClassificationInputs";
import ClassificationPanel from "../../../constants/ClassificationPanel";
import Drag from "../Drag";

export interface BoxProps {
  className: string;
  connected: string;
}

const SelectInput = ({ className, connected }: any) => {
  const name = "Select input component";

  return (
    <Drag
      className={className}
      name={name}
      connected={connected}
      input={ClassificationInputs.SELECT}
      panelName={ClassificationPanel.SELECTPANEL}
    >
      {name}
    </Drag>
  );
};

export default SelectInput;
