import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#201f24] text-white w-100 min-h-20">
      <div className="flex md:flex-row flex-col-reverse p-10 w-[100%] ">
        <div className=" ">
          <h1 className="text-4xl font-bold">Programming With Dickson</h1>
          <p className="break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            vitae incidunt nemo similique soluta saepe veniam voluptatum iusto.
            Et reiciendis tempore assumenda cupiditate deleniti provident quos
            iusto facilis iure asperiores.
          </p>
          <ul>
            <li></li>
          </ul>
        </div>

        <div className="">
          <h1 className="text-2xl  text-white font-bold">Userfull Links</h1>
          <ul>
            <li className="text-gray-500">Home</li>
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Service</li>
            <li className="text-gray-500">Terms of service</li>
            <li className="text-gray-500">Privacy policy</li>
          </ul>
        </div>

        <div className="grow-[2]">
          <h1 className="text-2xl  text-white font-bold">Userfull Links</h1>
          <ul>
            <li className="text-gray-500">Home</li>
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Service</li>
            <li className="text-gray-500">Terms of service</li>
            <li className="text-gray-500">Privacy policy</li>
          </ul>
        </div>

        <div className="grow-[2]">
          <h1 className="text-2xl  text-white font-bold">Userfull Links</h1>
          <ul>
            <li className="text-gray-500">Home</li>
            <li className="text-gray-500">About Us</li>
            <li className="text-gray-500">Service</li>
            <li className="text-gray-500">Terms of service</li>
            <li className="text-gray-500">Privacy policy</li>
          </ul>
        </div>
      </div>
      <p className="text-center p-10 text-white">
        @ Copyright ProgrammingWithDickson. All Right Resered <br /> Design by
        Dickson Awudu
      </p>
    </div>
  );
};

export default Footer;
