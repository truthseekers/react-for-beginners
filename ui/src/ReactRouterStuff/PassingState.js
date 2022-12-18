import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function PassingState() {
  const [state, setState] = useState("");
  let navigate = useNavigate();

  return (
    <div style={{ background: "lightgreen" }}>
      This component will pass state to the ReceivingState component
      <input
        type="text"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <h3>state: {state}</h3>
      <Link to="/receivingstate" state={state}>
        Send State!
      </Link>
      <br />
      <br />
      <button onClick={() => navigate(`/receivingstate`, { state: state })}>
        Send State Another Way!
      </button>
    </div>
  );
}

export default PassingState;
