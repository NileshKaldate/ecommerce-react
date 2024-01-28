import React, { useState } from "react";
import useSWR from "swr";
import { axiosInstance } from "../services/fetcher";

const Cart = () => {
  const { data, mutate } = useSWR("/cart/get");

  const totalProductPrice =
    data?.reduce((result, current) => {
      result += current.quantity * current.product.price;
      return result;
    }, 0) || 0;

  const handleQuantity = async (product, quantity) => {
    await axiosInstance
      .put("/cart/update-quantity", {
        productId: product._id,
        quantity: quantity,
      })
      .then(() => {
        mutate();
      });
  };

  return (
    <div className="flex justify-center mt-4">
      <div>
        <div className="flex justify-center mb-5">
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>
        {data?.length === 0 || !data ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div className="flex gap-10 items-start">
            <div className="border border-gray-400 rounded">
              <h1 className="p-5 font-semibold text-xl">Item List</h1>
              <div className="border border-gray-400"></div>
              <div className="p-5">
                {data?.map((item) => {
                  return (
                    <div>
                      <div className="flex gap-2 items-center py-5">
                        <img
                          src={item.product.image}
                          style={{ height: 150, width: 100 }}
                        />
                        <div className="w-64">{item.product.title}</div>
                        <div>
                          <div className="flex gap-2">
                            <div
                              className="cursor-pointer text-2xl"
                              onClick={() => {
                                handleQuantity(item.product, item.quantity - 1);
                              }}
                            >
                              -
                            </div>
                            <div className="cursor-pointer text-2xl">
                              {item.quantity}
                            </div>
                            <div
                              className="cursor-pointer text-2xl"
                              onClick={() => {
                                handleQuantity(item.product, item.quantity + 1);
                              }}
                            >
                              +
                            </div>
                          </div>
                          <div>${item.product.price}</div>
                        </div>
                      </div>
                      <div className="border border-gray-300"></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border border-gray-400 p-5 rounded flex flex-col gap-4 w-64">
              <div className="font-semibold text-xl">Order Summary</div>
              <div className="border border-gray-400"></div>
              <div className="flex justify-between">
                <p>Products</p>
                <p>${totalProductPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>$30</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total amount</p>
                <p>${(totalProductPrice + 30).toFixed(2)}</p>
              </div>
              <button className=" bg-[#FF9F00] text-white py-1 px-2 rounded text-sm w-full">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
