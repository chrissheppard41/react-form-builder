import { inputTypes, inputType } from "../types/inputType";

const relatedInputs = (inputs: inputTypes, relatedId: string): any[] => {
  let arr: any[] = [];
  const loop = (inputs: inputTypes, relatedId: string) => {
    if (!inputs[relatedId]) {
      return;
    }
    arr.push(inputs[relatedId]);
    Object.keys(inputs).forEach((key: string): void => {
      const input: inputType = inputs[key];
      if (input.connected === relatedId) {
        loop(inputs, input.id);
      }
    });
  };

  loop(inputs, relatedId);

  return arr;
};

export default relatedInputs;
