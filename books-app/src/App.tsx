import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Books } from './Books';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Books</h1>
      <Books count={ 10 } />
    </div>
  );
}

export default App;
