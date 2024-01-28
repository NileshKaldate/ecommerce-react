import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: localStorage.getItem("token"),
  },
});

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data.data);

export default fetcher;
