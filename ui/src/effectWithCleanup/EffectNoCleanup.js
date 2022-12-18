import React, { useEffect } from "react";

function EffectWithCleanup() {
  useEffect(() => {
    let myInterval = setInterval(() => console.log("Sup homie!"), 500);
  });

  return (
    <div style={{ background: "pink" }}>
      <h1>Effect with NO cleanup</h1>
      <h3>I have an interval running!</h3>
      <p>
        When you close me I keep the timer running because I don't know how to
        cleanup after myself
      </p>
    </div>
  );
}

export default EffectWithCleanup;
