import React, { useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Mustard-Yellow-City-Compact-Messenger-Bag.png?tr=cm-pad_resize,v-2,w-625,h-1237,dpr-2,q-60",
      rating: {
        rate: 3.9,
        count: 120,
      },
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://www.montecarlo.in/cdn/shop/products/223060390-4-38_1-pfp-044716-xNb.jpg?v=1696660565&width=1000",
      rating: {
        rate: 4.1,
        count: 259,
      },
      quantity: 1,
    },
  ]);
  return (
    <div className="flex justify-center mt-4">
      <div>
        <div className="flex justify-center mb-5">
          <h1 className="font-bold text-2xl">Cart</h1>
        </div>
        {products.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div className="flex gap-10 items-start">
            <div className="border border-gray-400 rounded">
              <h1 className="p-5 font-semibold text-xl">Item List</h1>
              <div className="border border-gray-400"></div>
              <div className="p-5">
                {products.map((item) => {
                  return (
                    <div>
                      <div className="flex gap-2 items-center py-5">
                        <img
                          src={item.image}
                          style={{ height: 100, width: 100 }}
                        />
                        <div className="w-64">{item.title}</div>
                        <div className="cursor-pointer text-2xl">-</div>
                        <div className="cursor-pointer text-2xl">
                          {item.quantity}
                        </div>
                        <div className="cursor-pointer text-2xl">+</div>
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
                <p>Products (14)</p>
                <p>$123</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>$123</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total amount</p>
                <p>$123</p>
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
