import React, { useState } from "react";
import useAddToArray from "../../hooks/useAddToArray";
import Options from "../../types/Options";
import Label from "../styles/label";
import Div from "../styles/div";
import Input from "../styles/input";
import styled from "styled-components";

const Span = styled.span`
  display: inline-block;
  width: 30px;
  height: 28px;
  border-radius: 3px;
  background-color: #eee;
  border: 1px solid #666;
  line-height: 24px;
  margin-left: 10px;
  text-align: center;
  margin-top: -5px;
  cursor: pointer;
`;
const Ul = styled.ul`
  list-style-type: none;
  margin: 10px 0 10px 5px;
`;
const InputOptins = styled(Input)`
  width: calc(60% - 40px);
  display: inline-block;
`;
const Li = styled.li`
  margin: 10px 0;
  line-height: 30px;
`;

const AddOptions = ({ inputName, inputValue, inputClassName }: any) => {
  const { array, setValue, deleteValue } = useAddToArray(inputValue);
  const [val, setVal] = useState("");

  return (
    <Div className="selectInput">
      <Label htmlFor={inputName}>Options</Label>
      <Div>
        <Ul>
          {array &&
            array.map((option: Options, index: number) => (
              <Li key={index}>
                key={option.key}, value={option.value}{" "}
                <Span onClick={() => deleteValue(option.key)}>x</Span>
              </Li>
            ))}
        </Ul>
        <InputOptins
          type="text"
          className={inputClassName}
          onChange={({ target: { value } }: any) => setVal(value)}
          value={val}
        />
        <input type="hidden" name={inputName} value={JSON.stringify(array)} />
        <Span
          onClick={() => {
            setValue(val);
            setVal("");
          }}
        >
          +
        </Span>
        <p>Format: 'key, value' or simply 'value'</p>
      </Div>
    </Div>
  );
};

AddOptions.defaultProps = {
  id: "",
  inputValue: "",
  inputClassName: "",
  panelName: ""
};

export default AddOptions;
