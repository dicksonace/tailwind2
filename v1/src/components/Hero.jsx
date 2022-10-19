import React from "react";

import Hero1 from "../assets/assets/img/hero-img.svg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-20 py-20 flex-cols-2 h-100">
      <div className="w-70">
        <h1 className="text-white text-5xl font-bold">
          Your Lightning Fast Delivery Partner
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a
          quod quos, laboriosam tempore iure esse sed, impedit architecto
          deleniti atque quisquam natus perspiciatis delectus repellat
          doloremque enim unde voluptates?
        </p>

        <div className="bg-white w-[100%] focus:outline-none  my-20 py-5 px-5 md:flex justify-between md:flex-row flex-col ">
          <input
            type="text"
            placeholder="ZIP code or City"
            className="outline-none border border-gray-500 px-5 py-1 md:w-[450px] round"
          />
          <button className="px-2 bg-[#434333] shadow round text-white font-bold px-4 py-2 relative my-2">
            Search
          </button>
        </div>
      </div>
      <div className="w-30">
        <img className="md:w-[1700px] md:block hidden" src={Hero1} alt="/" />
      </div>
    </div>
  );
};

export default Hero;
