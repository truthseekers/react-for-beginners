import { useState, useEffect } from "react";

function FetchJsonString() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/`)
  //     .then((response) => {
  //       console.log(response);
  //       console.log("two: ", response.data);
  //       console.log("three: ", response.body);
  //       // console.log("four: ", response.json());
  //       return response.json();
  //     })
  //     .then((actualData) => console.log("actualData: ", actualData));
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/fetchjsonstring`)
      .then((response) => response.json())
      .then((actualData) => console.log("actualData: ", actualData));
  }, []);

  return (
    <>
      <h1>Fetch Json string (no awaiting)</h1>
    </>
  );
}

export default FetchJsonString;
