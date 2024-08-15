import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder='Add a new task...'
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default App;
