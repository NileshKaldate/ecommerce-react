import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ecommerce-krhs.onrender.com",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data.data);

export default fetcher;
