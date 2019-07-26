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
    options: Array<string>,
    validation: {
        [key: string]: Object,
    }
};
