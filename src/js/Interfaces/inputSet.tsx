import { inputType } from "../types/inputType";

export interface inputRow {
  [id: string]: inputType;
}

export interface IInputSet {
  inputs: inputRow;
}
