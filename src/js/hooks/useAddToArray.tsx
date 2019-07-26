import {useState} from 'react';

interface Hook {
    array: string[], 
    setValue: (value: string) => void,
    deleteValue: (value: string) => void,
}; 
  
const useAddToArray = (
    arr: Array<string>
): Hook => {
    const [array, setArray] = useState(arr);

    const setValue = (value: string) => {
        array.push(value);
        setArray(array);
    }

    const deleteValue = (value: string) => {
        setArray(array.filter((arrValue: string) => value !== arrValue));
    };

    return {array, setValue, deleteValue};
};
  
export default useAddToArray;
  