import axios from "axios";
import React, { useState, useEffect } from "react";

function useGetProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("data. useGetProducts: ", data);
  useEffect(() => {
    console.log("in useeffect");
    const fetchProducts = async () => {
      try {
        const asyncResponse = await axios.get(
          process.env.REACT_APP_API_ENDPOINT + "products"
        );
        setError(asyncResponse.error);
        setData(asyncResponse.data);
        setLoading(false);
      } catch (error) {
        setError("Errorrrrr");
      }
    };
    fetchProducts();
  }, []);

  return { data, loading, error };
}

function useCreateProduct() {
  const [newProductResult, setNewProductResult] = useState(null);

  const createProduct = async (title) => {
    try {
      const asyncResponse = await axios.post(
        process.env.REACT_APP_API_ENDPOINT + "newProduct",
        { title }
      );
      setNewProductResult(asyncResponse.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return { newProductResult, setNewProductResult, createProduct };
}

export { useGetProducts, useCreateProduct };
