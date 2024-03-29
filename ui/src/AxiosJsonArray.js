import { useState, useEffect } from "react";
import axios from "axios";

function AxiosJsonArray() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const asyncResponse = await axios.get(
        "http://localhost:3001/axiosjsonarray"
      );
      console.log("asyncResponse: ", asyncResponse);
      // setData(asyncResponse.data);
      console.log("data: ", asyncResponse.data);
    } catch (error) {
      console.log("yea.");
    }
  };

  fetchData();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/`)
  //     .then((response) => console.log(response))
  //     .then((actualData) => console.log("actualData: ", actualData));
  // }, []);

  return (
    <>
      <h1>Axios Json Array</h1>
    </>
  );
}

export default AxiosJsonArray;
