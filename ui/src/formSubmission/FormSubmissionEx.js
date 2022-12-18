import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGetProducts } from "./hooks";

function FormSubmissionEx() {
  const [title, setTitle] = useState("");
  const { data, loading, error } = useGetProducts();
  const [products, setProducts] = useState([]);

  console.log("data in formsubmissionEx: ", data);

  useEffect(() => {
    if (products.length > 0) {
      console.log(
        "don't set the products to the old data. Only set the products state to the initial data from the db on load."
      );
      // all new products will be added to the products state by the newProduct function.
    } else {
      setProducts(data || []);
    }
    console.log("data in useEffect of formSubmissionEx", data);
  }, [products]);

  console.log("products: ", products);
  const newProduct = async (title) => {
    try {
      const asyncResponse = await axios.post(
        process.env.REACT_APP_API_ENDPOINT + "newProduct",
        { title }
      );

      const newProductList = [...products, asyncResponse.data];
      console.log("newProductList: ", asyncResponse.data);
      setProducts(newProductList);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <div>
      Form submit!
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => newProduct(title)}>Add New Product!</button>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export default FormSubmissionEx;
