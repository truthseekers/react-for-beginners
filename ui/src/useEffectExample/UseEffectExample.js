import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState("");

  const fetchProducts = async () => {
    try {
      const asyncResponse = await axios.get(
        process.env.REACT_APP_API_ENDPOINT + "products"
      );
      console.log("asyncResponse: ", asyncResponse);
      setProducts(asyncResponse.data);
    } catch (error) {
      console.log("yea");
    }
  };

  useEffect(() => {
    fetchProducts();
    document.title = `${products.length} products`;
    //
  }, []);

  useEffect(() => {
    document.title = `${products.length} products`;
  }, [products]);

  const addNewProduct = () => {
    setProducts([
      { id: products.length + 1, title: productInput },
      ...products,
    ]);
    setProductInput("");
  };

  console.log("products state: ", products);

  return (
    <div>
      <label>New Product: </label>
      <input
        type="text"
        value={productInput}
        onChange={(e) => setProductInput(e.target.value)}
      />
      <button onClick={addNewProduct}>Add New Product</button>
      <h1>Products List: </h1>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export default UseEffectExample;
