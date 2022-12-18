import React, { useState } from "react";

function StateExample() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  console.log("name: ", name);

  const someFunction = () => {
    return "I am a return value from a function";
  };

  const someData = "I am someData";

  function AboveFive() {
    return (
      <div style={{ background: "orange" }}>
        The content is above five!!!!! (or equal)
      </div>
    );
  }

  function BelowFive() {
    return (
      <div style={{ background: "red" }}>The content is BELOW five!!!!</div>
    );
  }

  return (
    <div style={{ background: "chartreuse" }}>
      <h1>Demonstrating State</h1>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>your name is: {name}</h3>

      <button onClick={() => setCount(count + 1)}>+</button>
      <h3>Current count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>

      <br />
      {someFunction()}
      {true && <div> Ahh this block is true so I show up. </div>}
      {false && <div> Ahh this block is FALSE so I don't. </div>}
      <br />
      {someData}
      <br />
      {count >= 5 ? <AboveFive /> : <BelowFive />}
    </div>
  );
}

export default StateExample;
