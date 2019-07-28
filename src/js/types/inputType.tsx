export type validationRule = {
    enabled: boolean,
    message: string,
};

export type inputType = {
    connected: string,
    parentClassName?: string,
    panelName: string,
    enableChildren: boolean,
    type: string,
    label: string,
    id: string,
    inputName: string,
    inputValue: string,
    inputClassName: string,
    disableChild?: boolean,
    validation: {
        [key: string]: validationRule,
    },
    fromPanel: boolean,
};

export type inputTypes = {
    [id: string]: inputType,
};

export type selectType = {
    connected: string,
    parentClassName?: string,
    panelName: string,
    enableChildren: boolean,
    type: string,
    label: string,
    id: string,
    inputName: string,
    inputValue: string,
    inputClassName: string,
    disableChild?: boolean,
    multiselect: string[] | boolean,
    validation: {
        [key: string]: validationRule,
    }
    options: string[] | string,
    fromPanel: boolean,
};

export type radioType = {
    connected: string,
    parentClassName?: string,
    panelName: string,
    enableChildren: boolean,
    type: string,
    label: string,
    id: string,
    inputName: string,
    inputClassName: string,
    disableChild?: boolean,
    validation: {
        [key: string]: validationRule,
    }
    inputValue: string | string[],
    options: string[] | string,
    fromPanel: boolean,
};

export type textareaType = {
    connected: string,
    parentClassName?: string,
    panelName: string,
    enableChildren: boolean,
    type: string,
    label: string,
    cols: number,
    rows: number,
    id: string,
    inputName: string,
    inputValue: string,
    inputClassName: string,
    disableChild?: boolean,
    validation: {
        [key: string]: validationRule,
    },
    fromPanel: boolean,
};
