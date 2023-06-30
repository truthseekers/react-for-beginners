import { useState, useEffect } from "react";

function FetchSendObj() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/fetchsendobj`, {
      // body: Object,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((response) => {
        console.log("response: ", response);
        return response.json();
      })
      .then((actualData) => console.log("actualData: ", actualData));
  }, []);

  return (
    <>
      <h1>Fetch Send obj (no awaiting)</h1>
    </>
  );
}

export default FetchSendObj;
