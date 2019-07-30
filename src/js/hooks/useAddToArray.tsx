import { useState } from "react";
import OptionBuild from "../utilities/OptionBuild";
import Options from "../types/Options";

interface Hook {
  array: Options[];
  setValue: (key: string, value?: string) => void;
  deleteValue: (key: string) => void;
}

const useAddToArray = (arr: Options[]): Hook => {
  const [array, setArray] = useState(arr);

  const setValue = (value: string) => {
    if (value) {
      const result = value.split(/,\s*/);
      array.push(OptionBuild(result[0], result[1]));
      setArray(array);
    }
  };

  const deleteValue = (key: string) => {
    setArray(array.filter((arrValue: Options) => key !== arrValue.key));
  };

  return { array, deleteValue, setValue };
};

export default useAddToArray;
