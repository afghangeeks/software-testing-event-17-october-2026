import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);

  return <button onClick={addOne}>Count: {count}</button>;
}
