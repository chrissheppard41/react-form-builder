import { inputType, inputTypes } from "../types/inputType";

const recursiveDelete = (inputs: inputTypes, idToDelete: string): void => {
  delete inputs[idToDelete];

  Object.keys(inputs).forEach((key: string): void => {
    const input: inputType = inputs[key];
    if (!input) {
      return;
    }
    if (input.connected === idToDelete) {
      recursiveDelete(inputs, input.id);
    }
  });
};

export default recursiveDelete;
