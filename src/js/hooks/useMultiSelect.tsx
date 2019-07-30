import { useState } from "react";
import ClassificationInputs from "../constants/ClassificationInputs";

interface Hook {
  array: string[];
  check: (value: string) => void;
  checkMultiple: (values: any) => void;
}

const useMultiSelect = (inputValue: string | string[], type: string): Hook => {
  const values =
    typeof inputValue === "object" ? [...inputValue] : [inputValue];
  const [array, setArray] = useState(values ? values : []);

  const check = (value: string) => {
    if (type === ClassificationInputs.CHECKBOX) {
      const inc = array.includes(value);
      if (inc) {
        setArray(
          array.filter((checkedItem: string): boolean => checkedItem !== value)
        );
      } else {
        setArray([...array, value]);
      }
    } else if (type === ClassificationInputs.RADIO) {
      setArray([value]);
    }
  };

  const checkMultiple = (values: any) => {
    let selectedForArray = [];

    for (var i = 0, l = values.length; i < l; i++) {
      if (values[i].selected) {
        selectedForArray.push(values[i].value);
      }
    }

    setArray(selectedForArray);
  };

  return { array, check, checkMultiple };
};

export default useMultiSelect;
