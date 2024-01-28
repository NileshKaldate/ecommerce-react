import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";

const ViewProduct = () => {
  const { id } = useParams();
  const { data: product } = useSWR(`/products/${id}`);
  const navigate = useNavigate();

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
    <div className="flex gap-12 justify-center mt-20">
      <img
        src={product?.image}
        style={{
          height: 400,
          width: 400,
          border: "1px solid gray",
          padding: "20px",
        }}
      />
      <div className="flex flex-col gap-4 w-64">
        <h1 className="font-bold">{product?.title}</h1>
        <p>Ratings : {product?.rating.rate}</p>
        <p>Price : ${product?.price}</p>
        <p className="text-xs">{product?.description}</p>
        <p>Category : {product?.category}</p>
        <div className="flex gap-2 py-2">
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
};

export default ViewProduct;
