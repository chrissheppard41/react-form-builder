import React from 'react';
import '../css/index.scss';
import FormBuilder from './FormBuilder';

const App: React.FC = () => {
    return (
      <div className="App">
        <header className="app-header">
          Header
        </header>
        <section>
          <FormBuilder 
            customComponents={{}}
            editMode={true}
            formData={{
              "460ac837-a74d-acb0-7b57-ea9c2c801913": {
                "id": "460ac837-a74d-acb0-7b57-ea9c2c801913",
                "type": "CHECKBOX",
                "label": "Radio input component",
                "validation": {
                  "required": {
                    "enabled": false
                  }
                },
                "connected": "",
                "enableChildren": true,
                "overrideDropzone": false,
                "overridePanel": false,
                "panelName": "RADIOPANEL",
                "inputName": "",
                "parentClassName": "",
                "inputClassName": "",
                "options": "[{\"key\":\"test\",\"value\":\"test\"},{\"key\":\"test2\",\"value\":\"test2\"}]"
              }
            }}
          />
        </section>
      </div>
    );
}

export default App;
