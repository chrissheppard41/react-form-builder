import React, { useState } from "react";
import FormBuilder from "./FormBuilder";
import { formSubmitType } from "./types/formSubmitType";
//const json = require("./sampleData.json");

const App: React.FC = () => {
  const [value, setValue] = useState(true);

  return (
    <div className="App">
      <header className="app-header">
        React form builder cs
        <span onClick={() => setValue(!value)}>
          {value ? "Disable" : "Enable"} edit more
        </span>
      </header>
      <section>
        <FormBuilder
          customComponents={{}}
          editMode={value}
          formData={{}}
          submitFunc={(data: formSubmitType, error: boolean) => {
            console.log("submitted", data, error);
          }}
        />
      </section>
    </div>
  );
};

export default App;
