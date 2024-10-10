import React from "react";
import fog from "../../../assets/fog.jpg";

const Summer = () => {
  return (
    // <div>
    //   <div className="w-full h-full">
    //     <img src={fog} alt="" className=" w-full h-[400px] object-cover" />
    //   </div>
    //   <div></div>
    // </div>
    <div>
      <div className="w-full h-full">
        <img
          src={fog}
          alt="Fog"
          className="w-full h-[400px] lg:h-[420px] object-cover z-20"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Summer;
