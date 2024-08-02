import useSWR from "swr";
import { getApi } from "./api";

export const useGetProducts = (params) => {
  return useSWR(["/products", params], getApi);
};
export const useGetProductsById = (id) => {
  return useSWR([`/products/${id}`], getApi);
};
export const useGetCartProducts = () => {
  return useSWR([`/cart/get`], getApi);
};
