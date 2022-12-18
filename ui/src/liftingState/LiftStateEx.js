import React, { useState } from "react";
import Dashboard2 from "./Dashboard2";
import Profile2 from "./Profile2";

function LiftStateEx() {
  const [name, setName] = useState("");

  return (
    <div style={{ background: "lightgray" }}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Name is: {name} </h3>

      <p>
        The "name" state is required in Profile2 and Dashboard2, so we need to
        lift the "name" state up to the closest "ancestor"
      </p>
      <p>
        Lift up the state to the closest component that both components using
        the state share.
      </p>
      <p>
        We can pass functions down too, so we're able to set the name within the
        children. See how we have setName in Dashboard2
      </p>

      <p>
        React is one way data flow, so there's not really an easy way to send
        data UP the component tree. That's why we lift state, and occasionally
        use context.
      </p>

      <Profile2 name={name} />
      <Dashboard2 name={name} setName={setName} />
    </div>
  );
}

export default LiftStateEx;
