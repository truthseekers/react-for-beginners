import React, { useState } from "react";
// could also destructure props like you see in the comment:
// function Dashboard({username}) {
function Dashboard(props) {
  const [state, setState] = useState("");
  console.log("props in dashboard: ", props);
  console.log("state in dashboard: ", state);
  return (
    <div style={{ background: "hotpink" }}>
      <h3>Dashboard area</h3>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setState(e.target.value)}
      />
      <p>Name of the user from the parent component: {props.userName} </p>
      <p>
        The message from the parent component:{" "}
        <strong>{props.propFromParent}</strong>
      </p>
    </div>
  );
}

export default Dashboard;
