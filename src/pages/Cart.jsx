import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { axiosInstance } from "../services/fetcher";
import { useGetCartProducts } from "../services/productService";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { data, isLoading } = useGetCartProducts();

  const [products, setProducts] = useState(data?.data);

  const totalProductPrice =
    data?.data?.reduce((result, current) => {
      result += current.quantity * current.product.price;
      return result;
    }, 0) || 0;

  const handleQuantity = async (product, quantity) => {
    if (quantity === 0) {
      setProducts(products.filter((item) => item.product._id !== product._id));
    } else {
      console.log("first");
      setProducts(
        products.map((item) => {
          if (item.product._id === product._id) {
            return { ...item, quantity: quantity };
          }
          return item;
        })
      );
    }
    !isLoading &&
      (await axiosInstance.put("/cart/update-quantity", {
        productId: product._id,
        quantity: quantity,
      }));
  };

  useEffect(() => {
    setProducts(data?.data);
  }, [data]);

  return (
    <div className="flex justify-center mt-4">
      <div>
        <div className="flex justify-center mb-5">
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>
        {products?.length === 0 || !data ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div className="flex gap-10 items-start">
            <div className="border border-gray-400 rounded">
              <h1 className="p-5 font-semibold text-xl">Item List</h1>
              <div className="border border-gray-400"></div>
              <div className="p-5">
                {products?.map((item) => {
                  return (
                    <div className="relative">
                      <MdDelete
                        className="absolute top-2 right-3 h-6 w-6 cursor-pointer"
                        onClick={() => {
                          handleQuantity(item.product, 0);
                        }}
                      />
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
