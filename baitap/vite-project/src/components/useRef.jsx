import { useState, useRef } from "react";

function UseRefDemo() {
    //Tang so lan render su dung useRef
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div>
      <p>State: {count}</p>
      <p>Render: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default UseRefDemo;
