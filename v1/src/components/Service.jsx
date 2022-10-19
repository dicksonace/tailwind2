import React from "react";
import { ImTruck } from "react-icons/im";
import { FaLuggageCart, FaPlaneDeparture } from "react-icons/fa";

const Service = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between  bg-white w-100 ">
      <div className="flex md:flex-row flex-col justify-betwwen m-5">
        <FaLuggageCart className="text-5xl text-blue-900 w-10" />
        <div className="text-justify px-4 w-80">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            blanditiis aliquid voluptas voluptate labore necessitatibus ea!
            Distinctio eos ducimus, facere adipisci, nobis aliquam impedit
            corporis labore nam fugiat, iusto molestiae!
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-betwwen m-5">
        <ImTruck className="text-5xl text-blue-900 w-20" />
        <div className="text-justify px-4 w-80">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            blanditiis aliquid voluptas voluptate labore necessitatibus ea!
            Distinctio eos ducimus, facere adipisci, nobis aliquam impedit
            corporis labore nam fugiat, iusto molestiae!
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-betwwen m-5">
        <FaPlaneDeparture className="text-5xl text-blue-900 w-20" />
        <div className="text-justify px-4 w-80">
          <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            blanditiis aliquid voluptas voluptate labore necessitatibus ea!
            Distinctio eos ducimus, facere adipisci, nobis aliquam impedit
            corporis labore nam fugiat, iusto molestiae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
