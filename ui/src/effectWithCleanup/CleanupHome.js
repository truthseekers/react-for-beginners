import React, { useState } from "react";
import EffectWithCleanup from "./EffectWithCleanup";
import EffectNoCleanup from "./EffectNoCleanup";

function CleanupHome() {
  const [cleanupMounted, setCleanupMounted] = useState(false);
  const [brokenMounted, setBrokenMounted] = useState(false);

  const renderBrokenSectionText = () => {
    if (brokenMounted) {
      return (
        <div>
          Component <strong>is mounted</strong>
        </div>
      );
    } else {
      return (
        <div>
          Component <strong>is NOT</strong> mounted
        </div>
      );
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ background: "yellowgreen" }}>
        <h1>This is an example of useEffect with cleanup.</h1>
        {cleanupMounted ? (
          <div>
            Component <strong>is mounted</strong>
          </div>
        ) : (
          <div>
            Component <strong>is NOT</strong> mounted
          </div>
        )}
        <button onClick={() => setCleanupMounted(!cleanupMounted)}>
          Mount (use) the EffectWithCleanup component
        </button>

        {cleanupMounted ? <EffectWithCleanup /> : ""}
      </div>
      <div style={{ background: "cyan" }}>
        <h1>This is a useEffect WITHOUT a cleanup</h1>
        <h3>This component leaves a timer on (bad)</h3>
        {renderBrokenSectionText()}
        <button onClick={() => setBrokenMounted(!brokenMounted)}>
          Mount (use) the broken component with no cleanup
        </button>

        {brokenMounted ? <EffectNoCleanup /> : ""}
      </div>
    </div>
  );
}

export default CleanupHome;
