import { useProducts, useNewProduct } from "../reactQueryStuff/utils/hooks";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Products() {
  const [title, setTitle] = useState("");
  const { data: products, isLoading } = useProducts();
  const newProductObject = useNewProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const addProduct = () => {
    newProductObject.mutate({
      title: title,
    });
  };

  return (
    <div style={{ background: "cyan" }}>
      This is the products page!
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addProduct}>Add Product!</button>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </div>
  );
}

export default Products;
