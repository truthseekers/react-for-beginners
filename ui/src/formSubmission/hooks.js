import axios from "axios";
import { useState, useEffect } from "react";

function useGetProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("data in useGetProducts: ", data);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const asyncResponse = await axios.get(
          process.env.REACT_APP_API_ENDPOINT + "products"
        );
        setError(asyncResponse.error);
        setData(asyncResponse.data);
        setLoading(false);
      } catch (error) {
        setError("Errrorr");
      }
    };

    fetchProducts();
  }, []);
  console.log("after useEffect in hook");
  return { data, loading, error };
}

export { useGetProducts };
