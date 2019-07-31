import Actions from "../constants/Actions";
import { panelData } from "../types/PanelDataType";

export default (state: any, dispatch: any) => {
  //console.log(state);
  const addInput = (InputData: any) =>
    dispatch({
      payload: { InputData },
      type: Actions.ADD_INPUT
    });

  const moveInput = (dragIndex: number, hoverIndex: number) => {
    const keys = Object.keys(state.inputs);
    let InputData = {};

    if (dragIndex !== hoverIndex) {
      keys.forEach((input: string, index: number) => {
        let inputRow = state.inputs[input];
        if (hoverIndex === index) {
          inputRow = state.inputs[keys[dragIndex]];
        } else if (dragIndex === index) {
          inputRow = state.inputs[keys[hoverIndex]];
        }

        InputData = {
          ...InputData,
          [inputRow.id]: inputRow
        };
      });
    } else {
      InputData = state.inputs;
    }

    return dispatch({
      payload: { InputData },
      type: Actions.ALL_INPUT
    });
  };

  const save = (data: panelData) =>
    dispatch({
      payload: { data },
      type: Actions.SAVE
    });

  const editInput = (id: string, panelName: string) =>
    dispatch({
      payload: { id, panelName },
      type: Actions.EDIT_INPUT
    });

  const deleteInput = (id: string) =>
    dispatch({
      payload: { id },
      type: Actions.DELETE_INPUT
    });

  const clearPanel = () =>
    dispatch({
      type: Actions.CLEAR_PANEL
    });

  const setPanel = (panelName: string) =>
    dispatch({
      payload: {
        panelName
      },
      type: Actions.SET_PANEL
    });

  const addValidation = (id: string, validationRule: string) => {
    if (
      !state.validation[id] ||
      !state.validation[id].includes(validationRule)
    ) {
      return dispatch({
        payload: {
          id,
          validationRule
        },
        type: Actions.SET_FORM_INPUT_ERROR
      });
    }
  };

  const removeValidation = (id: string, validationRule: string) => {
    if (state.validation[id] && state.validation[id].includes(validationRule)) {
      return dispatch({
        payload: {
          id,
          validationRule
        },
        type: Actions.REMOVE_FORM_INPUT
      });
    }
  };

  const manageModals = (modalName: string, data: any) =>
    dispatch({
      payload: { data, modalName },
      type: Actions.MANAGE_MODALS
    });

  const enableChildren = (id: string, val: string) => {
    if (id !== "") {
      const enableChildren = state.inputs[id].enableChildren || false;
      if (val && !enableChildren) {
        //enable children
        return dispatch({
          payload: { enable: true, id },
          type: Actions.ENABLE_CHILDREN
        });
      } else if (!val && enableChildren) {
        //disable children
        return dispatch({
          payload: { enable: false, id },
          type: Actions.ENABLE_CHILDREN
        });
      }
    }
  };

  const setFormError = (error: boolean) =>
    dispatch({
      payload: error,
      type: Actions.FORM_ERROR
    });

  return {
    addInput,
    addValidation,
    clearPanel,
    deleteInput,
    editInput,
    enableChildren,
    manageModals,
    moveInput,
    removeValidation,
    save,
    setFormError,
    setPanel
  };
};
