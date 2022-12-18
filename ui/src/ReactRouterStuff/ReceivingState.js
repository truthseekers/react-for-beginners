import { useLocation } from "react-router-dom";

function ReceivingState() {
  const location = useLocation();
  const data = location.state;

  return (
    <div style={{ background: "lightblue" }}>
      This component has received the following state: {data}
    </div>
  );
}

export default ReceivingState;
