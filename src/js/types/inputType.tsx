export type inputType = {
    parentClassName?: string,
    type: string,
    label: string,
    id: string,
    inputName: string,
    inputValue: string,
    inputClassName: string,
    validation: {
        [key: string]: {
            enabled: boolean,
            message: string,
        },
    }
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
