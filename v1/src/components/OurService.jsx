import React from "react";
import SubOurService from "./sub/SubOurService";
import img1 from "../assets/assets/img/warehousing-service.jpg";
import img2 from "../assets/assets/img/packaging-service.jpg";
import img3 from "../assets/assets/img/cargo-service.jpg";
import img4 from "../assets/assets/img/storage-service.jpg";
import img5 from "../assets/assets/img/trucking-service.jpg";
import img6 from "../assets/assets/img/logistics-service.jpg";

const OurService = () => {
  return (
    <div className="flex flex-col   bg-white w-100 min-h-[50px]">
      <h1 className="text-center text-4xl   font-bold  py-5">OurService</h1>

      <div className="grid grid-cols-3 gap-2 m-20">
        <SubOurService
          img={img1}
          title="WAREHOUSING"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
        <SubOurService
          img={img2}
          title="PACKAGING"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
        <SubOurService
          img={img3}
          title="CARGO"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
        <SubOurService
          img={img4}
          title="STORAGE"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
        <SubOurService
          img={img5}
          title="TRUCKING"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
        <SubOurService
          img={img6}
          title="LOGISTICS"
          description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti quibusdam nisi commodi officia autem pariatur facilis magni quis dolore, distinctio repellat voluptatibus vitae totam doloribus. Facilis quae facere nulla.`}
        />
      </div>
    </div>
  );
};

export default OurService;
