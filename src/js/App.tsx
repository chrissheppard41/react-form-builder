import React from 'react';
import '../css/index.scss';
import FormView from './FormView/FormView';
import FormProvider from './context/FormContext';

const App: React.FC = () => {
    return (
      <FormProvider>
        <div className="App">
          <header className="app-header">
            Header
          </header>
          <section>
            <FormView 
              customComponents={{}}
            />
          </section>
        </div>
      </FormProvider>
    );
}

export default App;
