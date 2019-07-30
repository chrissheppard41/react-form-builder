import React, { Fragment } from "react";
import { inputType } from "../types/inputType";
import { inputRow } from "../Interfaces/inputSet";
import { ValidationType } from "../types/validationType";
import { ComponentListType } from "../types/ComponentListType";
import InputFormContainer from "./InputFormContainer";

interface Props {
  inputs: inputRow;
  validation: ValidationType;
  componentList: ComponentListType;
  connected: string;
}

const MapFormInputs = ({
  inputs,
  validation,
  componentList,
  connected
}: Props) => (
  <>
    {Object.keys(inputs)
      .filter(
        (key: string) =>
          inputs[key].connected === connected &&
          ((inputs[key].connected !== "" &&
            inputs[inputs[key].connected].enableChildren) ||
            inputs[key].connected === "")
      )
      .map((index: string, key: number) => {
        const { parentClassName, type, id }: inputType = inputs[index];
        const Component = componentList[type];

        if (Component === undefined) {
          return <div>Error adding component</div>;
        }

        return (
          <Fragment key={key}>
            <InputFormContainer
              classes={parentClassName || ""}
              validation={validation[index] || []}
            >
              <Component.Input id={index} {...inputs[index]} />
            </InputFormContainer>
            <MapFormInputs
              inputs={inputs}
              validation={validation}
              componentList={componentList}
              connected={id}
            />
          </Fragment>
        );
      })}
  </>
);

export default MapFormInputs;
