import React from 'react';
import '../css/index.scss';
import FormView from './FormView/FormView';

const App: React.FC = () => {
    return (
        <div className="App">
          <header className="App-header">
            Header
          </header>
          <section>
            <FormView />
          </section>
        </div>
    );
}

export default App;
