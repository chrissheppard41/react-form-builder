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
            formData={{}}
          />
        </section>
      </div>
    );
}

export default App;
