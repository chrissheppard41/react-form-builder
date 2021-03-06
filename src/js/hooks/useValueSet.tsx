import { useState } from "react";
import { useStateValue } from "../context/FormContext";

const useValueSet = (value: string, id: string): any => {
  const { actions }: any = useStateValue();
  actions.setValue({ id, value });
  return useState(value);
};

export default useValueSet;
