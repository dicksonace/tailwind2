import React from "react";

const SubOurService = (props) => {
  return (
    <div className={`m-5 shadow ${props.className}`}>
      <img src={props.img} alt={props.img} className="h-50 fill flex-2" />
    </div>
  );
};

export default SubOurService;
