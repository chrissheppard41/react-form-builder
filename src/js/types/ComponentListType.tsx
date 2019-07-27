export type ComponentNameType = string[];

export type ComponentType = {
    Input: any,
    Draggable: any,
    Panel: any,
};

export type ComponentListType = {
    [key: string]: ComponentType,
};
