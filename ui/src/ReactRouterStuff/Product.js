import { useParams } from "react-router-dom";
import { useGetProduct } from "../reactQueryStuff/utils/hooks";

function Product() {
  let params = useParams();
  const useGetProductObj = useGetProduct(params.productId);
  console.log("the parameter is: ", params);

  if (useGetProductObj.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ background: "violet" }}>
      <h1>This is an individual Product!</h1>
      You are looking at a: {useGetProductObj.data.title} with an ID of{" "}
      {useGetProductObj.data.id}
    </div>
  );
}

export default Product;
