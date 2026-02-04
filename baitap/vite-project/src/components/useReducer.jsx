import { useReducer } from "react";

function reducer(state, action) {
  if (action === "plus") return state + 1;
  if (action === "minus") return state - 1;
  return state;
}

function UseReducerDemo() {
    // Tang giam count su dung useReducer
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("plus")}>+</button>
      <button onClick={() => dispatch("minus")}>-</button>
    </div>
  );
}

export default UseReducerDemo;
