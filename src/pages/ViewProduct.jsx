import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

const ViewProduct = () => {
  const { id } = useParams();
  const product = useMemo(() => {
    return data.find((item) => item.id === Number(id));
  }, [id]);
  console.log(product);

  return (
    <div className="flex gap-12 justify-center mt-20">
      <img
        src={product.image}
        style={{
          height: 400,
          width: 400,
          border: "1px solid gray",
          padding: "20px",
        }}
      />
      <div className="flex flex-col gap-4 w-64">
        <h1 className="font-bold">{product.title}</h1>
        <p>Ratings : {product.rating.rate}</p>
        <p>Price : ${product.price}</p>
        <p className="text-xs">{product.description}</p>
        <p>Category : {product.category}</p>
        <div className="flex gap-2 py-2">
          <button
            className=" bg-[#FF9F00] text-white py-1 px-2 rounded text-sm"
            onClick={() => {
              navigate(`/view/${product.id}`);
            }}
          >
            Buy Now
          </button>
          <button className="bg-[#FB641B] text-white py-1 px-2 rounded text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
