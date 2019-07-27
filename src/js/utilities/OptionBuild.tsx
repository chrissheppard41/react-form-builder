import Options from '../types/Options';

export default (key: string, value?: string): Options => {
    const keyFormatted: string = key.replace(/[\W]+/gi, '');

    return (value) ? {key: keyFormatted, value} : {key: keyFormatted, value: key};
};

export const formatSingleOptions = (arr: string[]): Options[] =>
    arr.map((option: string) => ({key: option, value: option}));

export const optionsList = (options: string | string[]): Options[] => 
    (typeof options === 'object')
        ? formatSingleOptions(options)
        : (typeof options === 'string')
            ? JSON.parse(options)
            : [];