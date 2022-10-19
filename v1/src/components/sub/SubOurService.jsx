import React from "react";

const SubOurService = (props) => {
  return (
    <div className={`m-5 shadow cursor-pointer ${props.className}`}>
      <img src={props.img} alt={props.img} className="h-50 bg-cover bg-center flex-2" />
      <div className="p-6">
       <h1 className="text-2xl font-bold py-3 hover:text-blue-600">{props.title}</h1>
       <p className="text-gray-500">{props.description}</p>
      </div>
    </div>
  );
};

export default SubOurService;
