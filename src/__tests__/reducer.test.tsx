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
      label: "lorem ipsum",
      type: "text"
    };

    dispatch({ payload: { InputData }, type: Actions.ADD_INPUT });
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
        label: "lorem ipsum",
        type: "text"
      }
    };

    dispatch({ payload: { InputData }, type: Actions.ALL_INPUT });
    const [state] = jooks.run();
    const test = Object.keys(state.inputs);
    expect(test.length).toEqual(1);
    expect(state.inputs).toEqual(InputData);
  });

  it("Should set the panel name", () => {
    const [, dispatch] = jooks.run();
    const panelName = "lorem ipsum";

    dispatch({ payload: { panelName }, type: Actions.SET_PANEL });
    const [state] = jooks.run();
    expect(state.panel).toEqual(panelName);
  });

  it("Should clear the panel name from the store", () => {
    let [state, dispatch] = jooks.run();
    const panelName = "lorem ipsum";

    dispatch({ payload: { panelName }, type: Actions.SET_PANEL });
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
    dispatch({ payload: { id, panelName }, type: Actions.EDIT_INPUT });
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
      select: {
        label: "lorem ipsum 2",
        type: "select"
      },
      text: {
        label: "lorem ipsum",
        type: "text"
      }
    };
    dispatch({ payload: { InputData }, type: Actions.ALL_INPUT });

    [state] = jooks.run();
    const test = Object.keys(state.inputs);
    expect(test.length).toEqual(2);

    dispatch({ payload: { id: "text" }, type: Actions.DELETE_INPUT });
    expect(state.inputs).toEqual({ select: InputData.select });
  });

  it("Should save input data for a specific input", () => {
    let [state, dispatch] = jooks.run();
    const InputData = {
      text: {
        label: "lorem ipsum",
        type: "text"
      }
    };
    dispatch({ payload: { id: "text" }, type: Actions.EDIT_INPUT });
    dispatch({ payload: { InputData }, type: Actions.ALL_INPUT });
    const data = {
      inputId: "lorem ipsum",
      inputName: "lorem ipsum"
    };
    dispatch({ payload: { data }, type: Actions.SAVE });

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
      payload: {
        id: "text",
        validationRule: "lorem"
      },
      type: Actions.SET_FORM_INPUT_ERROR
    });
    [state, dispatch] = jooks.run();
    expect(state.validation).toEqual({
      text: ["lorem"]
    });
    dispatch({
      payload: {
        id: "text",
        validationRule: "lorem"
      },
      type: Actions.REMOVE_FORM_INPUT
    });
    [state] = jooks.run();
    expect(state.validation).toEqual({
      text: []
    });
  });

  it("Should set the modal and clear it", () => {
    let [state, dispatch] = jooks.run();
    const modal = {
      data: { rule: "1" },
      modalName: "text"
    };
    dispatch({ payload: modal, type: Actions.MANAGE_MODALS });

    [state, dispatch] = jooks.run();
    expect(state.modal.name).toEqual(modal.modalName);
    expect(state.modal.data).toEqual(modal.data);

    dispatch({
      payload: { data: {}, modalName: "" },
      type: Actions.MANAGE_MODALS
    });
    [state] = jooks.run();
    expect(state.modal.name).toEqual("");
    expect(state.modal.data).toEqual({});
  });

  it("Should edit the enable child state within a input component", () => {
    let [state, dispatch] = jooks.run();
    const InputData = {
      enableChildren: false,
      label: "lorem ipsum",
      type: "text"
    };
    dispatch({ payload: { InputData }, type: Actions.ADD_INPUT });
    [state, dispatch] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeFalsy();

    dispatch({
      payload: { enable: true, id: "test" },
      type: Actions.ENABLE_CHILDREN
    });
    [state, dispatch] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeTruthy();

    dispatch({
      payload: { enable: false, id: "test" },
      type: Actions.ENABLE_CHILDREN
    });
    [state] = jooks.run();
    expect(state.inputs["test"].enableChildren).toBeFalsy();
  });

  it("Should set the form error state to true", () => {
    let [state, dispatch] = jooks.run();
    dispatch({ payload: true, type: Actions.FORM_ERROR });
    [state, dispatch] = jooks.run();
    expect(state.formError).toBeTruthy();
  });

  it("Should set the form error state to false", () => {
    let [state, dispatch] = jooks.run();
    dispatch({ payload: false, type: Actions.FORM_ERROR });
    [state, dispatch] = jooks.run();
    expect(state.formError).toBeFalsy();
  });
});
