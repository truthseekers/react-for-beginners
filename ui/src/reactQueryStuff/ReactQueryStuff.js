import { useProducts, useNewProduct } from "./utils/hooks";
import React, { useState } from "react";

const ReactQueryStuff = () => {
  const [title, setTitle] = useState("");
  const { data: products, isLoading } = useProducts();
  const newProductObject = useNewProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("products: ", products);

  const addProduct = () => {
    newProductObject.mutate({
      title: title,
    });
  };

  return (
    <div>
      <h1>React Query makes state management across teh full stack easier!</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addProduct}>Add Product!</button>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
};

export default ReactQueryStuff;
