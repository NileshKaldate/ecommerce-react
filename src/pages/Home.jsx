import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { axiosInstance } from "../services/fetcher";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { data, error, isLoading } = useSWR("/products");
  const { mutate } = useSWR("/cart/get");
  const navigate = useNavigate();
  const navButton =
    "border border-black rounded text-black hover:bg-black hover:text-white px-2";

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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex justify-center gap-2 py-5">
        <button className={`${navButton}`}>All</button>
        <button className={`${navButton}`}>Men's Clothing</button>
        <button className={`${navButton}`}>Women's Clothing</button>
        <button className={`${navButton}`}>Jewelery</button>
        <button className={`${navButton}`}>Electronics</button>
      </div>
      <div className="grid grid-cols-4 gap-10 w-full">
        {data?.map((product) => {
          return (
            <div id={product.id} key={product._id} className="p-2">
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
