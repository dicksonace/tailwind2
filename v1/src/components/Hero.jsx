import React from "react";

import Hero1 from "../assets/8401-removebg-preview.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-20 py-20 flex-cols-2 h-100">
      <div>
        <h1 className="text-white text-5xl font-bold">
          Your Lightning Fast Delivery Partner
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a
          quod quos, laboriosam tempore iure esse sed, impedit architecto
          deleniti atque quisquam natus perspiciatis delectus repellat
          doloremque enim unde voluptates?
        </p>

        <div className="bg-white w-[100%] my-20 py-5 px-5 md:flex justify-between">
          <input
            type="text"
            placeholder="ZIP code or City"
            className="outline"
          />
          <button className="px-2 bg-[#434333]">Search</button>
        </div>
      </div>
      <div className="">
        <img className="md:w-[1700px] " src={Hero1} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
