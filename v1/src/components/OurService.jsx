import React from "react";
import SubOurService from "./sub/SubOurService";
import img1 from "../assets/assets/img/warehousing-service.jpg";
import img2 from "../assets/assets/img/page-header.jpg";
import img3 from "../assets/assets/img/service-details.jpg";
import img4 from "../assets/assets/img/storage-service.jpg";
import img5 from "../assets/assets/img/trucking-service.jpg";
import img6 from "../assets/assets/img/logistics-service.jpg";

const OurService = () => {
  return (
    <div className="flex flex-col   bg-white w-100 min-h-[50px]">
      <h1 className="text-center text-4xl   font-bold  py-5">OurService</h1>

      <div className="grid grid-cols-3 gap-2 m-20">
        <SubOurService img={img1} />
        <SubOurService img={img2} />
        <SubOurService img={img3} />
        <SubOurService img={img4} />
        <SubOurService img={img5} />
        <SubOurService img={img6} />
      </div>
    </div>
  );
};

export default OurService;
