import React, { useState } from 'react';
import './App.css'; // Import the App.css file which styles the html below

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">Simple React Counter</h1>
        <p className="info">
          This is a basic React Counter app. Click the "Increment" and "Decrement"
          buttons to change the count.
        </p>
      </div>
      <div className="counter">
        <p className="count">Count: {count}</p>
        <button className="button" onClick={handleIncrement}>
          Increment
        </button>
        <button className="button" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;


