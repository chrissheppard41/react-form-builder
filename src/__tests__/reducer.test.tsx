import { useReducer } from "react";
import init from "Jooks";
import Reducer, { initialState } from "../js/context/Reducer";
import Actions from "../js/constants/Actions";

const createRule = enabled => {
  const rule = {
    lorem: {
      enable: enabled
    }
  };
  const validationData = {
    text: [rule]
  };

  return {
    rule,
    validationData
  };
};
jest.mock("../js/utilities/UUIDGeneration", () => {
  return () => "test";
});

describe("Reducer tests", () => {
  const jooks = init(() => useReducer(Reducer, initialState));

  it("Should add an object to the input list", () => {
    const [, dispatch] = jooks.run();
    const InputData = {
      type: "text",
      label: "lorem ipsum"
    };

    dispatch({ type: Actions.ADD_INPUT, payload: { InputData } });
    const [state] = jooks.run();
    const test = Object.keys(state.inputs);
    expect(test.length).toEqual(1);
    test.map(id => {
      const input = state.inputs[id];
      expect({ ...InputData, id }).toEqual(input);
    });
  });

  it("Should add to the inputs object directly", () => {
    const [, dispatch] = jooks.run();
    const InputData = {
      id: {
        type: "text",
        label: "lorem ipsum"
      }
    };

    dispatch({ type: Actions.ALL_INPUT, payload: { InputData } });
    const [state] = jooks.run();
    const test = Object.keys(state.inputs);
    expect(test.length).toEqual(1);
    expect(state.inputs).toEqual(InputData);
  });

  it("Should set the panel name", () => {
    const [, dispatch] = jooks.run();
    const panelName = "lorem ipsum";

    dispatch({ type: Actions.SET_PANEL, payload: { panelName } });
    const [state] = jooks.run();
    expect(state.panel).toEqual(panelName);
  });

  it("Should clear the panel name from the store", () => {
    let [state, dispatch] = jooks.run();
    const panelName = "lorem ipsum";

    dispatch({ type: Actions.SET_PANEL, payload: { panelName } });
    [state, dispatch] = jooks.run();
    expect(state.panel).toEqual(panelName);

    dispatch({ type: Actions.CLEAR_PANEL });

    [state] = jooks.run();
    expect(state.panel).toEqual("");
    expect(state.panelData.id).toEqual("");
  });

  it("Should set the panel name to open", () => {
    let [state, dispatch] = jooks.run();
    const id = "id";
    const panelName = "name";
    dispatch({ type: Actions.EDIT_INPUT, payload: { id, panelName } });
    [state, dispatch] = jooks.run();
    expect(state.panel).toEqual(panelName);
    expect(state.panelData.id).toEqual(id);

    dispatch({ type: Actions.CLEAR_PANEL });

    [state] = jooks.run();
    expect(state.panel).toEqual("");
    expect(state.panelData.id).toEqual("");
  });

  it("Should delete an input", () => {
    let [state, dispatch] = jooks.run();
    const InputData = {
      text: {
        type: "text",
        label: "lorem ipsum"
      },
      select: {
        type: "select",
        label: "lorem ipsum 2"
      }
    };
    dispatch({ type: Actions.ALL_INPUT, payload: { InputData } });

    [state] = jooks.run();
    const test = Object.keys(state.inputs);
    expect(test.length).toEqual(2);

    dispatch({ type: Actions.DELETE_INPUT, payload: { id: "text" } });
    expect(state.inputs).toEqual({ select: InputData.select });
  });

  it("Should save input data for a specific input", () => {
    let [state, dispatch] = jooks.run();
    const InputData = {
      text: {
        type: "text",
        label: "lorem ipsum"
      }
    };
    dispatch({ type: Actions.EDIT_INPUT, payload: { id: "text" } });
    dispatch({ type: Actions.ALL_INPUT, payload: { InputData } });
    const data = {
      inputName: "lorem ipsum",
      inputId: "lorem ipsum"
    };
    dispatch({ type: Actions.SAVE, payload: { data } });

    [state] = jooks.run();
    expect(state.inputs).toEqual({
      ...InputData,
      text: {
        ...InputData.text,
        ...data
      }
    });
  });

  it("Should set the error for an input", () => {
    let [state, dispatch] = jooks.run();
    dispatch({
      type: Actions.SET_FORM_INPUT_ERROR,
      payload: {
        id: "text",
        validationRule: "lorem"
      }
    });
    [state, dispatch] = jooks.run();
    expect(state.validation).toEqual({
      text: ["lorem"]
    });
    dispatch({
      type: Actions.REMOVE_FORM_INPUT,
      payload: {
        id: "text",
        validationRule: "lorem"
      }
    });
    [state] = jooks.run();
    expect(state.validation).toEqual({
      text: []
    });
  });

  it("Should set the modal and clear it", () => {
    let [state, dispatch] = jooks.run();
    const modal = {
      modalName: "text",
      data: { rule: "1" }
    };
    dispatch({ type: Actions.MANAGE_MODALS, payload: modal });

    [state, dispatch] = jooks.run();
    expect(state.modal.name).toEqual(modal.modalName);
    expect(state.modal.data).toEqual(modal.data);

    dispatch({
      type: Actions.MANAGE_MODALS,
      payload: { modalName: "", data: {} }
    });
    [state] = jooks.run();
    expect(state.modal.name).toEqual("");
    expect(state.modal.data).toEqual({});
  });

  it("Should edit the enable child state within a input component", () => {
    let [state, dispatch] = jooks.run();
    const InputData = {
      type: "text",
      label: "lorem ipsum",
      enableChildren: false
    };
    dispatch({ type: Actions.ADD_INPUT, payload: { InputData } });
    [state, dispatch] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeFalsy();

    dispatch({
      type: Actions.ENABLE_CHILDREN,
      payload: { id: "test", enable: true }
    });
    [state, dispatch] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeTruthy();

    dispatch({
      type: Actions.ENABLE_CHILDREN,
      payload: { id: "test", enable: false }
    });
    [state] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeFalsy();
  });
});
