import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className='text-2xl font-bold' >Hello world</h1>
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
