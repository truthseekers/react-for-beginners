// import React, { useState } from "react";
import axios from "axios";

function ApiCall() {
  //   const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const asyncResponse = await axios.get(
        process.env.REACT_APP_API_ENDPOINT + "products"
      );
      console.log("asyncResponse: ", asyncResponse);
      //   setData(asyncResponse.data);
    } catch (error) {
      console.log("yea.");
    }
  };

  fetchData();

  //   console.log("data: ", data);
  // Can't use state like this because it causes an infinite loop. setData() changes a value in the component, so the component re-renders,
  // which triggers the server request again, which calls setData() and the cycle continues forever.

  return (
    <div>
      Calling api. Open dev tools and click "data" or the object to see the
      products from the server.
    </div>
  );
}

export default ApiCall;
