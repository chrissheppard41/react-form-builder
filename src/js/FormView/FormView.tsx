import React from "react";
import Dropzone from "./Dropzone";
import Draggables from "./Draggables";
import FormBuilderView from "../formBuilder/FormBuilderView";
import { useStateValue } from "../context/FormContext";
import ComponentList from "../formBuilder/ComponentList";
import { ComponentListType } from "../types/ComponentListType";
import Panels from "./Panels";
import DeleteModal from "./modals/DeleteModal";
import ModalNames from "../constants/ModalNames";
import { formSubmitType } from "../types/formSubmitType";
import styled from "styled-components";
import copy from "copy-to-clipboard";

interface Props {
  customComponents: ComponentListType;
  editMode: boolean;
}

const FormIndexDisplay = styled.div`
  width: 100%;
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
  font-family: monospace;
`;

const CopyButton = styled.button`
  margin-top: 15px;
`;

const FormView = ({ customComponents, editMode }: Props) => {
  const { state }: any = useStateValue();

  const componentList = {
    ...ComponentList,
    ...customComponents
  };

  const submitTest = (formData: formSubmitType) => {
    console.log("On submit", formData);
  };

  return (
    <div className="formView-container">
      {editMode && (
        <div className="formView-builder">
          <Panels componentList={componentList} state={state} />
          <Draggables
            classNames="formView-draggable"
            componentList={componentList}
            connected={state.panelData.id}
          />
          <div className="formView-dropable">
            {state.modal.name === ModalNames.DELETE && <DeleteModal />}
            <h3>Drop component</h3>
            <div className="form-dropzone">
              <Dropzone allowedDropEffect="copy" classNames="" connected="" />
            </div>
          </div>
          <FormIndexDisplay>
            <pre>
              <code>{JSON.stringify(state.inputs)}</code>
            </pre>
            <CopyButton onClick={() => copy(JSON.stringify(state.inputs))}>
              Copy to clipboard
            </CopyButton>
          </FormIndexDisplay>
        </div>
      )}
      <div className="formBuilder">
        <FormBuilderView
          inputs={state.inputs}
          validation={state.validation}
          customComponents={customComponents}
          submitTo={submitTest}
        />
      </div>
    </div>
  );
};

export default FormView;
