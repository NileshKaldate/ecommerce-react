import React, { useState } from "react";
import { data } from "../data";

const Home = () => {
  const [products, setProducts] = useState(data);
  const navButton =
    "border border-black rounded text-black hover:bg-black hover:text-white";
  return (
    <div className="px-40 mt-10">
      <div className="row justify-content-center">
        <div className="buttons text-center py-5">
          <button className={`${navButton}`}>All</button>
          <button className={`${navButton}`}>Men's Clothing</button>
          <button className={`${navButton}`}>Women's Clothing</button>
          <button className={`${navButton}`}>Jewelery</button>
          <button className={`${navButton}`}>Electronics</button>
        </div>
        <div className="grid grid-cols-4 gap-10 w-full">
          {products.map((product) => {
            return (
              <div id={product.id} key={product.id} className="p-2">
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
                    <p className="text-xs line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <ul className="py-2">
                    <li className="">$ {product.price}</li>
                  </ul>
                  <div className="flex gap-2 py-2">
                    <button className=" bg-[#FF9F00] text-white py-1 px-2 rounded text-sm">
                      Buy Now
                    </button>
                    <button className="bg-[#FB641B] text-white py-1 px-2 rounded text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
