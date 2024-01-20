import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const data = [
    {
      title: "Free Shipping",
      subTitle: "When you spend $80 or more",
      imgUrl:
        "data:image/png;base64,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",
    },
    {
      title: "We are available 24/7",
      subTitle: "Need help? contact us anytime",
      imgUrl:
        "data:image/png;base64,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",
    },
    {
      title: "Satisfied or return",
      subTitle: "Easy 30-day return policy",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/006/095/886/small/undo-icon-style-free-vector.jpg",
    },
    {
      title: "100% secure payments",
      subTitle: "Visa, Mastercard, Stripe, PayPal",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/6993/6993594.png",
    },
  ];
  return (
    <div>
      <div className="bg-[#0573F0] py-2 px-2 text-white">
        <nav className="flex justify-between ">
          <div className="" to="/">
            React Ecommerce
          </div>
          <div className="flex gap-5">
            <div className="" to="/">
              Home
            </div>
            <div className="" to="">
              Products
            </div>
            <div className="" to="">
              About
            </div>
            <div className="">Contact</div>
          </div>
          <div className="flex  gap-5">
            <div to="" className="">
              <i className=""></i> Login
            </div>
            <div to="" className="">
              <i className=""></i> Register
            </div>
            <div to="" className="">
              <i className=""></i> Cart{" "}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex justify-between mt-2 px-20">
        {data.map((item) => {
          return (
            <div className="flex items-center gap-3">
              <img
                src={item.imgUrl}
                style={{ height: 24, objectFit: "fill" }}
              />
              <div>
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
