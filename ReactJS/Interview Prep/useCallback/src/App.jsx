import { useState } from "react";
import ChildComponents from "./components/ChildComponents";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <div>
        <div>
          <h1>Count: {count}</h1>
          <button onClick={handleCount}>increses</button>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="enter text"
          />
        </div>
        <br />
        <div>
          <ChildComponents handleCount={handleCount} buttonName="Click me" />
        </div>
      </div>
    </>
  );
}

export default App;
