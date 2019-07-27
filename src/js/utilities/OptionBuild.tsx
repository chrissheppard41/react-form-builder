import Options from '../types/Options';

export default (key: string, value?: string): Options => {
    const keyFormatted: string = key.replace(/[\W]+/gi, '');

    return (value) ? {key: keyFormatted, value} : {key: keyFormatted, value: key};
};

export const formatSingleOptions = (arr: string[]): Options[] =>
    arr.map((option: string) => ({key: option, value: option}));
