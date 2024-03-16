import React, { useState } from 'react';
import './App.css';

function App() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) return;
    const newStack = stack.slice(); 
    newStack.unshift(inputValue); 
    setStack(newStack);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) return; 
    const newStack = stack.slice(); 
    newStack.pop(); 
    setStack(newStack);
  };

  return (
    <div className="App">
      <h1> </h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a word"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div className="stack-content">
        {stack.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
