import React, { useState, useEffect } from "react";
import { useCreateProduct, useGetProducts } from "./hooks2";

function FormSubmissionEx2() {
  const [title, setTitle] = useState("");
  const { data, loading, error } = useGetProducts();
  const { newProductResult, setNewProductResult, createProduct } =
    useCreateProduct();
  const [products, setProducts] = useState([]);

  console.log("data: ", data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (newProductResult) {
    setProducts([newProductResult, ...products]);
    setNewProductResult(null);
    setTitle("");
  }

  const submitNewProduct = (title) => {
    createProduct(title);
  };

  return (
    <div>
      Form submit version 2!
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => submitNewProduct(title)}>Add New Product</button>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
}

export default FormSubmissionEx2;
