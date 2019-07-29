export interface validationRule {
  enabled: boolean;
  message: string;
}

export interface inputType {
  connected: string;
  parentClassName?: string;
  panelName: string;
  enableChildren: boolean;
  type: string;
  label: string;
  id: string;
  inputName: string;
  inputValue: string;
  inputClassName: string;
  disableChild?: boolean;
  validation: {
    [key: string]: validationRule;
  };
  fromPanel: boolean;
}

export interface inputTypes {
  [id: string]: inputType;
}

export interface selectType {
  connected: string;
  parentClassName?: string;
  panelName: string;
  enableChildren: boolean;
  type: string;
  label: string;
  id: string;
  inputName: string;
  inputValue: string;
  inputClassName: string;
  disableChild?: boolean;
  multiselect: string[] | boolean;
  validation: {
    [key: string]: validationRule;
  };
  options: string[] | string;
  fromPanel: boolean;
}

export interface radioType {
  connected: string;
  parentClassName?: string;
  panelName: string;
  enableChildren: boolean;
  type: string;
  label: string;
  id: string;
  inputName: string;
  inputClassName: string;
  disableChild?: boolean;
  validation: {
    [key: string]: validationRule;
  };
  inputValue: string | string[];
  options: string[] | string;
  fromPanel: boolean;
}

export interface textareaType {
  connected: string;
  parentClassName?: string;
  panelName: string;
  enableChildren: boolean;
  type: string;
  label: string;
  cols: number;
  rows: number;
  id: string;
  inputName: string;
  inputValue: string;
  inputClassName: string;
  disableChild?: boolean;
  validation: {
    [key: string]: validationRule;
  };
  fromPanel: boolean;
}
