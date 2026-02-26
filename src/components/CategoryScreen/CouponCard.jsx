// import React from "react";
const CouponCard = ({ heading, description, image, link, cost }) => {
  // const randomNum = Math.floor(Math.random() * 99);
  return (
    <div className="m-3 mt-6 relative w-68 rounded-br-4xl rounded-bl-4xl rounded-t-2xl shadow-xl shadow-gray-900">
      {/* Top Section (Brown Background) */}
      <div className="bg-[#786a41] p-6 h-13 rounded-t-2xl relative">
        {/* Product Image */}
        <img
          src={image}
          alt="Person"
          className="absolute -top-12 left-4 w-25 h-25 rounded-full bg-white border-1 p-1 border-[#786a41]"
        />

        {/* Discount Tag */}
        <div className="absolute -top-1 right-0 text-white text-lg font-bold py-1 rounded-md w-30 text-center leading-tight">
          <p className="">Upto</p>
          <p>{cost}% OFF</p>
        </div>
      </div>

      {/* Bottom Section (Yellow Background) */}
      <div className="bg-[#f7d069] p-4 rounded-bl-2xl rounded-br-4xl shadow-md shadow-gray-900">
        <h3 className="text-lg font-bold">{heading}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* Arrow Button */}
      <a
       href={link}
       target="_blank" className="absolute bottom-0 right-0 w-15 h-15 bg-black text-white flex items-center justify-center rounded-full cursor-pointer border-4 border-white shadow-md shadow-gray-900 group transition">
        <span className="group-hover:translate-x-2 transition duration-300">
          ➜
        </span>
      </a>
    </div>
  );
};

export default CouponCard;



