export type ComponentNameType = string[];

export interface ComponentType {
  Input: any;
  Draggable: any;
  Panel: any;
}

export interface ComponentListType {
  [key: string]: ComponentType;
}
