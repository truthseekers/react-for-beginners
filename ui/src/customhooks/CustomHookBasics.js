import { useCount } from "./hooks";

function CustomHookBasics() {
  const [myCount, { increment, decrement, setToFive }] = useCount(16);

  return (
    <div>
      <h3>Current Count: {myCount}</h3>

      <button onClick={increment}>Increase by 1</button>
      <button onClick={decrement}>Decrease by 1</button>
      <button onClick={setToFive}>Set to 5</button>
    </div>
  );
}

export default CustomHookBasics;
