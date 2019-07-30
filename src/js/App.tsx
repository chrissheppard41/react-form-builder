import React, { useState } from "react";
import "../css/index.scss";
import FormBuilder from "./FormBuilder";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 55px;
  color: white;
  background-color: grey;
  padding: 10px;
  line-height: 35px;
  position: relative;
`;

const SpanBtn = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const App: React.FC = () => {
  const [value, setValue] = useState(true);

  return (
    <div className="App">
      <Header className="app-header">
        React form builder cs
        <SpanBtn onClick={() => setValue(!value)}>
          {value ? "Disable" : "Enable"} edit more
        </SpanBtn>
      </Header>
      <section>
        <FormBuilder customComponents={{}} editMode={value} formData={{}} />
      </section>
    </div>
  );
};

export default App;
