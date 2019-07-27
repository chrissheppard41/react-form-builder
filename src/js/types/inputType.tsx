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
        [key: string]: {
            enabled: boolean,
            message: string,
        },
    }
};

export type inputTypes = {
    [id: string]: inputType,
};

export type selectType = {
    parentClassName?: string,
    label: string,
    inputClassName: string,
    id: string,
    inputName: string,
    inputValue: string,
    options: string[] | string,
    multiselect: string[] | boolean,
    validation: {
        [key: string]: Object,
    }
};

export type radioType = {
    parentClassName?: string,
    label: string,
    inputClassName: string,
    id: string,
    type: string,
    inputName: string,
    inputValue: string | string[],
    options: string[] | string,
    fromPanel: boolean,
    validation: {
        [key: string]: Object,
    }
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
        [key: string]: {
            enabled: boolean,
            message: string,
        },
    }
};
