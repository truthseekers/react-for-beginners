import React from "react";

const useCount = (initialState = 4) => {
  const [count, setCount] = React.useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const setToFive = () => setCount(5);

  return [
    count,
    {
      increment: increment,
      decrement,
      setToFive,
    },
  ];
  // or can return object like this: return { state, increment, decrement, setToFive }
  // object returns would require you to alter the destructuring in CustomHookBasics.js to:
  // const { state, increment, decrement, setToFive } = useCount();
};

export { useCount };
