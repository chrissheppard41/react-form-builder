import React from "react";
import Div from "./styles/div";
import { useStateValue } from "../context/FormContext";
import styled from "styled-components";

const DivError = styled(Div)`
  color: red;
  margin-bottom: 5px;
`;

const DivValidationError = styled(Div)`
  display: ${(props: any) => (props.error ? "block" : "none")};
`;

const ValidationRules = ({ validation }: any) => {
  const { state }: any = useStateValue();

  return (
    // @ts-ignore
    <DivValidationError error={state.formError} className="validationRules">
      {validation.length !== 0 &&
        validation
          .filter((val: string) => val !== "")
          .map((val: string, key: number): any => (
            <DivError key={key} className={`rule ${state.formError}`}>
              {val}
            </DivError>
          ))}
    </DivValidationError>
  );
};

export default ValidationRules;
