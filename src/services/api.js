import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ecommerce-krhs.onrender.com",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

export const getApi = ([url, params]) =>
  axiosInstance.get(url, { params }).then((res) => res.data);
