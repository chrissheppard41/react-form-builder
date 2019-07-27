import {useState} from 'react';
import ClassificationInputs from '../constants/ClassificationInputs';

interface Hook {
    array: string[], 
    check: (value: string) => void,
}; 
  
const useMultiSelect = (
    inputValue: string | string[],
    type: string
): Hook => {
    const values = (typeof inputValue=== 'object')
        ? [...inputValue]
        : [inputValue];
    const [array, setArray] = useState(values ? values : []);

    const check = (value: string) => {
        if (type === ClassificationInputs.CHECKBOX) {
            const inc = array.includes(value);
            if (inc) {
                setArray(array.filter((checkedItem: string): boolean => checkedItem !== value));
            } else {
                setArray([...array, value]);
            }
        } else if (type === ClassificationInputs.RADIO) {
            setArray([value]);
        }
    }

    return {array, check};
};
  
export default useMultiSelect;
  