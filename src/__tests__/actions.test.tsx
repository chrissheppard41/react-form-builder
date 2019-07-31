import init from "Jooks";
import { initialState } from "../js/context/Reducer";
import useActions from "../js/context/useActions";
import Actions from "../js/constants/Actions";

const inputs = {
  idOne: {
    enableChildren: false,
    id: "idOne",
    label: "lorem ipsum",
    type: "lorem ispum"
  },
  idTwo: {
    enableChildren: true,
    id: "idTwo",
    label: "lorem ipsum",
    type: "lorem ispum"
  },
  idThree: {
    enableChildren: false,
    id: "idThree",
    label: "lorem ipsum",
    type: "lorem ispum"
  }
};

const validation = {
  lorem: ["ipsum"]
};

const state = {
  ...initialState,
  inputs,
  validation
};

describe("Reducer tests", () => {
  const jooks = init(() => useActions(state, jest.fn(action => action)));

  it("Should call the add input function", () => {
    const { addInput } = jooks.run();

    expect(addInput({ lorem: "ipsum" })).toEqual({
      payload: { InputData: { lorem: "ipsum" } },
      type: Actions.ADD_INPUT
    });
  });

  it("Should call the move input function but shouldn't move the order", () => {
    const { moveInput } = jooks.run();

    expect(moveInput(0, 0)).toEqual({
      payload: { InputData: inputs },
      type: Actions.ALL_INPUT
    });
  });

  it("Should move the input from position 0 to position 1", () => {
    const { moveInput } = jooks.run();

    expect(moveInput(0, 1)).toEqual({
      payload: {
        InputData: {
          idTwo: inputs.idTwo,
          idOne: inputs.idOne,
          idThree: inputs.idThree
        }
      },
      type: Actions.ALL_INPUT
    });
  });

  it("Should save an input", () => {
    const { save } = jooks.run();

    expect(save({ lorem: "ipsum" })).toEqual({
      payload: { data: { lorem: "ipsum" } },
      type: Actions.SAVE
    });
  });

  it("Should save the id of the input field", () => {
    const { editInput } = jooks.run();

    expect(editInput("ipsum", "lorem")).toEqual({
      payload: { id: "ipsum", panelName: "lorem" },
      type: Actions.EDIT_INPUT
    });
  });

  it("Should delete the id of the input field", () => {
    const { deleteInput } = jooks.run();

    expect(deleteInput("ipsum")).toEqual({
      payload: { id: "ipsum" },
      type: Actions.DELETE_INPUT
    });
  });

  it("Should delete the id of the input field", () => {
    const { clearPanel } = jooks.run();

    expect(clearPanel()).toEqual({ type: Actions.CLEAR_PANEL });
  });

  it("Should set the panel name", () => {
    const { setPanel } = jooks.run();

    expect(setPanel("lorem")).toEqual({
      payload: { panelName: "lorem" },
      type: Actions.SET_PANEL
    });
  });

  it("Should add validation types", () => {
    const { addValidation } = jooks.run();

    expect(addValidation("lorems", "ipsum")).toEqual({
      payload: { id: "lorems", validationRule: "ipsum" },
      type: Actions.SET_FORM_INPUT_ERROR
    });
  });

  it("Shouldn't attempt to add validation type if it exists already", () => {
    const { addValidation } = jooks.run();

    expect(addValidation("lorem", "ipsum")).toEqual(undefined);
  });

  it("Should delete validation types", () => {
    const { removeValidation } = jooks.run();

    expect(removeValidation("lorem", "ipsum")).toEqual({
      payload: { id: "lorem", validationRule: "ipsum" },
      type: Actions.REMOVE_FORM_INPUT
    });
  });

  it("Shouldn't attempt to delete validation type if it doesn't exists already", () => {
    const { removeValidation } = jooks.run();

    expect(removeValidation("lorems", "ipsum")).toEqual(undefined);
  });

  it("Should add a modal with a name and data", () => {
    const { manageModals } = jooks.run();
    const data = { data: "ipsum" };
    expect(manageModals("lorem", data)).toEqual({
      payload: { data, modalName: "lorem" },
      type: Actions.MANAGE_MODALS
    });
  });

  it("Should enable the children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("idOne", "value")).toEqual({
      payload: { enable: true, id: "idOne" },
      type: Actions.ENABLE_CHILDREN
    });
  });

  it("Should disable the children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("idTwo", "")).toEqual({
      payload: { enable: false, id: "idTwo" },
      type: Actions.ENABLE_CHILDREN
    });
  });
  it("Should not perform enabling or disabling children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("", "")).toEqual(undefined);
  });
  it("Should set the form state to error", () => {
    const { setFormError } = jooks.run();

    expect(setFormError(true)).toEqual({ payload: true, type: "FORM_ERROR" });
  });
  it("Should set the form state to valid", () => {
    const { setFormError } = jooks.run();

    expect(setFormError(false)).toEqual({ payload: false, type: "FORM_ERROR" });
  });
});
