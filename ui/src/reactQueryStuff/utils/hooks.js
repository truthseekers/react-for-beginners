import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const GetProducts = async () => {
  const { data } = await axios.get("http://localhost:3001/products");
  return data;
};

function useProducts() {
  const { isLoading, isFetching, data, isError, refetch } = useQuery(
    ["products"],
    GetProducts,
    { retry: 1, retryDelay: 500 }
  );
  return { data, isLoading, isFetching, isError, refetch };
}

const NewProduct = async (body) => {
  console.log("body in NewProduct: ", body);
  const { data } = await axios.post(`http://localhost:3001/newProduct`, body);
  return data;
};

function useNewProduct() {
  const queryClient = useQueryClient();
  let navigate = useNavigate();

  return useMutation(NewProduct, {
    onSuccess: (data) => {
      // queryClient.refetchQueries(['products', 'product']); // surprisingly doesn't work.
      // queryClient.refetchQueries(); // refetches everything.
      queryClient.refetchQueries(["products"]); // refetches for the list, but not the individual item when auto-redirecting.
      queryClient.refetchQueries({ queryKey: ["product", data.id] }); // refetches the individual item page query, but not the list.
      // queryClient.setQueryData(["product", data.id], data); // auto updates the new item. Does NOT refresh the list by itself.
      // queryClient.refetchQueries(["products", ["product", data.id]]); Doesn't work at all.
      console.log("data in onSuccess: ", data);
      navigate(`/products/${data.id}`);
    },
  });
}

const GetProduct = async (key) => {
  console.log("GetProduct key: ", key);
  const id = key.queryKey[1];
  const { data } = await axios.get(`http://localhost:3001/product/${id}`);

  return data;
};

function useGetProduct(id) {
  const { status, data, error, isError, isFetching, isLoading } = useQuery(
    ["product", id],
    GetProduct
  );

  return { status, data, error, isError, isFetching, isLoading };
}

export { useProducts, useNewProduct, useGetProduct };
