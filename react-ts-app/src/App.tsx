import React from 'react';

import Counter from './component/Counter';
import Greeting from "./component/Greeting";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="title">Hilooo...</h1>
      <Greeting name="Rimy" />
      <Counter />
    </div>
  );
};

export default App;