import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function handleInputValue() {
    return Number(inputRef.current.value);
  }

  function plus(e) {
    e.preventDefault();
    setResult(prev => prev + handleInputValue());
  }

  function minus(e) {
    e.preventDefault();
    setResult(prev => prev - handleInputValue());
  }

  function times(e) {
    e.preventDefault();
    setResult(prev => prev * handleInputValue());
  }

  function divide(e) {
    e.preventDefault();
    const value = handleInputValue();
    if (value !== 0) {
      setResult(prev => prev / value);
    } else {
      alert("Cannot divide by zero.");
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          Result: <strong>{result}</strong>
        </p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div style={{ marginTop: "10px" }}>
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Subtract</button>
          <button onClick={times}>Multiply</button>
          <button onClick={divide}>Divide</button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
