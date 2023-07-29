import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const addCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const subtractCount = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  const disableButtons = useCallback(() => {
    setDisabled((prev) => !prev);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>

        <button
          data-testid="minus-button"
          onClick={subtractCount}
          disabled={disabled}
        >
          -
        </button>

        <button
          data-testid="plus-button"
          onClick={addCount}
          disabled={disabled}
        >
          +
        </button>

        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-button"
            onClick={disableButtons}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
