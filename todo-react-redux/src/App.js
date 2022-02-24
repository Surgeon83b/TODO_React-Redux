import './App.css';
import React from 'react';
import {Todo} from './containers/Todo';

function App() {
  return (
    <div className="App">
      <h2>{'Мой список задач'}</h2>
      <Todo />
    </div>
  )
}

export default App;
