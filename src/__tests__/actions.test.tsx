import init from "Jooks";
import { initialState } from "../js/context/Reducer";
import useActions from "../js/context/useActions";
import Actions from "../js/constants/Actions";

const inputs = {
  idOne: {
    id: "idOne",
    label: "lorem ipsum",
    type: "lorem ispum",
    enableChildren: false
  },
  idTwo: {
    id: "idTwo",
    label: "lorem ipsum",
    type: "lorem ispum",
    enableChildren: true
  },
  idThree: {
    id: "idThree",
    label: "lorem ipsum",
    type: "lorem ispum",
    enableChildren: false
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
      type: Actions.ADD_INPUT,
      payload: { InputData: { lorem: "ipsum" } }
    });
  });

  it("Should call the move input function but shouldn't move the order", () => {
    const { moveInput } = jooks.run();

    expect(moveInput(0, 0)).toEqual({
      type: Actions.ALL_INPUT,
      payload: { InputData: inputs }
    });
  });

  it("Should move the input from position 0 to position 1", () => {
    const { moveInput } = jooks.run();

    expect(moveInput(0, 1)).toEqual({
      type: Actions.ALL_INPUT,
      payload: {
        InputData: {
          idTwo: inputs.idTwo,
          idOne: inputs.idOne,
          idThree: inputs.idThree
        }
      }
    });
  });

  it("Should save an input", () => {
    const { save } = jooks.run();

    expect(save({ lorem: "ipsum" })).toEqual({
      type: Actions.SAVE,
      payload: { data: { lorem: "ipsum" } }
    });
  });

  it("Should save the id of the input field", () => {
    const { editInput } = jooks.run();

    expect(editInput("ipsum")).toEqual({
      type: Actions.EDIT_INPUT,
      payload: { id: "ipsum" }
    });
  });

  it("Should delete the id of the input field", () => {
    const { deleteInput } = jooks.run();

    expect(deleteInput("ipsum")).toEqual({
      type: Actions.DELETE_INPUT,
      payload: { id: "ipsum" }
    });
  });

  it("Should delete the id of the input field", () => {
    const { clearPanel } = jooks.run();

    expect(clearPanel()).toEqual({ type: Actions.CLEAR_PANEL });
  });

  it("Should set the panel name", () => {
    const { setPanel } = jooks.run();

    expect(setPanel("lorem")).toEqual({
      type: Actions.SET_PANEL,
      payload: { panelName: "lorem" }
    });
  });

  it("Should add validation types", () => {
    const { addValidation } = jooks.run();

    expect(addValidation("lorems", "ipsum")).toEqual({
      type: Actions.SET_FORM_INPUT_ERROR,
      payload: { id: "lorems", validationRule: "ipsum" }
    });
  });

  it("Shouldn't attempt to add validation type if it exists already", () => {
    const { addValidation } = jooks.run();

    expect(addValidation("lorem", "ipsum")).toEqual(undefined);
  });

  it("Should delete validation types", () => {
    const { removeValidation } = jooks.run();

    expect(removeValidation("lorem", "ipsum")).toEqual({
      type: Actions.REMOVE_FORM_INPUT,
      payload: { id: "lorem", validationRule: "ipsum" }
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
      type: Actions.MANAGE_MODALS,
      payload: { modalName: "lorem", data }
    });
  });

  it("Should enable the children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("idOne", "value")).toEqual({
      type: Actions.ENABLE_CHILDREN,
      payload: { id: "idOne", enable: true }
    });
  });

  it("Should disable the children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("idTwo", "")).toEqual({
      type: Actions.ENABLE_CHILDREN,
      payload: { id: "idTwo", enable: false }
    });
  });
  it("Should not perform enabling or disabling children", () => {
    const { enableChildren } = jooks.run();

    expect(enableChildren("", "")).toEqual(undefined);
  });
});
