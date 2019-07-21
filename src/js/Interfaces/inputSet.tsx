import {inputType} from '../types/inputType';

export type inputRow = {
    [id: string]: inputType,
};

export interface IInputSet {
    inputs: inputRow,
};
