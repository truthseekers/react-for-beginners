import React, { useEffect } from "react";

function EffectWithCleanup() {
  useEffect(() => {
    let myInterval = setInterval(() => console.log("sup homie!"), 500);

    // alternative to the below un-named function
    // return function cleanup() {
    //  clearInterval(myInterval);
    //}

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div style={{ background: "pink" }}>
      <h1>Effect with Cleanup</h1>
      <h3>See the console in the dev tools. I have an interval running!</h3>
    </div>
  );
}

export default EffectWithCleanup;
