import { useState, useEffect } from "react";
// import axios from "axios";

function FetchFour() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const asyncResponse = await axios.get(
  //       "http://localhost:3001/" + "sendhello"
  //     );
  //     console.log("asyncResponse: ", asyncResponse);
  //     // setData(asyncResponse.data);
  //     console.log("data: ", asyncResponse.data);
  //   } catch (error) {
  //     console.log("yea.");
  //   }
  // };

  // fetchData();

  // this one gives me some "unexpected token" error despite giving me the data i'm trying to get... in the error.
  // useEffect(() => {
  //   fetch(`http://localhost:3001/sendhello`)
  //     .then((response) => {
  //       console.log(response);
  //       console.log("response.body: ", response.body);
  //       console.log("response.json: ", response.json());
  //     })
  //     .then((actualData) => {
  //       console.log("actualData: ", actualData);
  //     });
  // }, []);

  // this doesn't work either. Stupid docs and garbage tutorials
  // useEffect(() => {
  //   fetch(`http://localhost:3001/sendhellojson`)
  //     .then((response) => {
  //       console.log(response);
  //       console.log("response.body: ", response.body);
  //       console.log("response.json: ", response.json());
  //     })
  //     .then((actualData) => {
  //       console.log("actualData: ", actualData);
  //     });
  // }, []);

  async function logJSONData() {
    const response = await fetch("http://localhost:3001/sendhellojson");
    const jsonData = await response.json();
    console.log("holy cow jsonData: ", jsonData);
  }

  logJSONData();

  async function logResSend() {
    const response = await fetch("http://localhost:3001/sendhello");
    console.log("response: ", response.body);
    // const jsonData = await response();
    // console.log("log resSend: ", jsonData);
  }

  logResSend();

  return (
    <>
      <h1>Fetch Four (no axios)</h1>
    </>
  );
}

export default FetchFour;
