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
import copy from "copy-to-clipboard";

interface Props {
  customComponents: ComponentListType;
  editMode: boolean;
  submitFunc: (data: formSubmitType, error: boolean) => void;
  canelFunc: (e: any) => void | boolean;
}

const FormView = ({
  customComponents,
  editMode,
  submitFunc,
  canelFunc
}: Props) => {
  const { state, actions }: any = useStateValue();

  const componentList = {
    ...ComponentList,
    ...customComponents
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
          <div className="clipboard">
            <pre>
              <code>{JSON.stringify(state.inputs)}</code>
            </pre>
            <button onClick={() => copy(JSON.stringify(state.inputs))}>
              Copy to clipboard
            </button>
          </div>
        </div>
      )}
      <div className="formBuilder">
        <FormBuilderView
          inputs={state.inputs}
          validation={state.validation}
          customComponents={customComponents}
          submitTo={submitFunc}
          canelFunc={canelFunc}
          setFormError={actions.setFormError}
          formError={state.formError}
        />
      </div>
    </div>
  );
};

FormView.defaultProps = {
  customComponents: {},
  editMode: false
};

export default FormView;
