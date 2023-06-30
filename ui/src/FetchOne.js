import { useState, useEffect } from "react";

function FetchOne() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/`)
      .then((response) => console.log(response))
      .then((actualData) => console.log("actualData: ", actualData));
  }, []);

  return (
    <>
      <h1>Fetch One</h1>
    </>
  );
}

export default FetchOne;
