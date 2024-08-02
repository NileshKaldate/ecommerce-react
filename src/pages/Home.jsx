import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { axiosInstance } from "../services/fetcher";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetProducts } from "../services/productService";
import { PRODUCT_CATEGORIES } from "../constants/constants";

const Home = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const { data } = useGetProducts({
    category: category === "all" ? "" : category,
  });
  const { mutate } = useSWR("/cart/get");

  const handleAddToCart = async (product) => {
    await axiosInstance
      .post("/cart/add", { productId: product._id })
      .then((res) => {
        mutate();
        toast.success(res.data.message);
      });
  };

  return (
    <div className="px-40 mt-10">
      <div className="flex justify-center gap-2 py-5">
        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`border border-black rounded text-black hover:bg-black hover:text-white px-2 ${
              category === cat ? "bg-black text-white" : ""
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-10 w-full">
        {data?.data?.map((product) => {
          return (
            <div key={product._id} className="p-2">
              <div className="" key={product.id}>
                <img
                  className=""
                  src={product.image}
                  alt=""
                  style={{
                    height: 200,
                    width: 300,
                    objectFit: "contain",
                  }}
                />
                <div className="text-sm py-2 ">
                  <h5 className="font-bold mb-1 line-clamp-1">
                    {product.title}
                  </h5>
                  <p className="text-xs line-clamp-2">{product.description}</p>
                </div>
                <ul className="py-2">
                  <li className="">$ {product.price}</li>
                </ul>
                <div className="flex gap-2 py-2">
                  <button
                    className=" bg-[#FF9F00] text-white py-1 px-2 rounded text-sm"
                    onClick={() => {
                      navigate(`/view/${product._id}`);
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bg-[#FB641B] text-white py-1 px-2 rounded text-sm"
                    onClick={() => {
                      if (localStorage.getItem("token")) {
                        handleAddToCart(product);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
