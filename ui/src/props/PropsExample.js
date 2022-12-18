import React, { useState } from "react";
import Dashboard from "./Dashboard";

function PropsExample() {
  const [name, setName] = useState("");
  console.log("propsExample");

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Name is: {name}</h3>
      {/* We are able to pass "stuff" into children components. Stuff like static data, state, functions, objects, etc... */}
      <Dashboard userName={name} propFromParent={"Hello I like pie!"} />
    </div>
  );
}

export default PropsExample;
