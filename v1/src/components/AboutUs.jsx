import React from "react";
import aboutus from "../assets/assets/img/about.jpg";

import { MdMyLocation, MdLocationOn } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

const AboutUs = () => {
  return (
    <div className="bg-white mx-30 flex md:flex-row flex-col justify-between">
      <div className="w-50 flex-1 my-40 mr-5 ml-20">
        <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
        <p className="text-gray-500 py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nulla
          voluptate saepe libero necessitatibus velit dignissimos eveniet
          deserunt, aspernatur ea deleniti soluta exercitationem quam in vero
          assumenda natus qui expedita.
        </p>

        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col">
            <div className="flex-2">
              <MdMyLocation className="text-7xl m-4 text-blue-500" />
            </div>
            <div className="flex-5">
              <h2>Location</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorem iure eligendi repellendus perferendis amet reiciendis
                obcaecati ipsam, voluptates eos pariatur vitae unde? Autem ma
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col">
            <div className="flex-2">
              <MdLocationOn className="text-7xl m-4 text-blue-500" />
            </div>
            <div className="flex-5">
              <h2>Location</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorem iure eligendi repellendus perferendis amet reiciendis
                obcaecati ipsam, voluptates eos pariatur vitae unde? Autem ma
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col">
            <div className="flex-2">
              <FcAbout className="text-7xl m-4 text-blue-500" />
            </div>
            <div className="flex-5">
              <h2>Location</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                dolorem iure eligendi repellendus perferendis amet reiciendis
                obcaecati ipsam, voluptates eos pariatur vitae unde? Autem ma
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 flex-1 my-40 mr-20">
        <img src={aboutus} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
