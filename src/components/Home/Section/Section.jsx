import React from "react";
import axum from "../../../assets/axum.png";
import chilada from "../../../assets/chilada.jpg";
import celebration from "../../../assets/celebration.png";

const Section = () => {
  return (
    // <div className="relative border-solid border-black">
    //   <div className=" absolute -top-40 left-1 z-10 w-[40%]">
    //     <img src={axum} alt="Axum" className=" -rotate-90 rounded-br-lg" />
    //   </div>
    //   <div className=" absolute top-[132px] left-44 z-10">
    //     <img src={celebration} alt="celebration" className=" -rotate-90" />
    //   </div>
    //   <div className=" absolute w-[40%] right-40 ">
    //     <img
    //       src={chilada}
    //       alt="Chilada"
    //       className=" -rotate-90 object-cover w-full h-full rounded-[27px]"
    //     />
    //   </div>
    // </div>

    // <div className="relative">
    //   <div className="absolute top-[250px] lg:-top-[80px] md:-top-40 left-1 lg:left-[100px] w-[40%] sm:w-[60%] md:w-[50%] lg:w-[30%] z-10">
    //     <img
    //       src={axum}
    //       alt="Axum"
    //       className="-rotate-90 rounded-br-lg object-cover"
    //     />
    //   </div>
    //   <div className="absolute top-[250px] lg:top-[93px] md:top-[132px] left-44 z-10 sm:right-24 md:left-36 lg:left-80">
    //     <img
    //       src={celebration}
    //       alt="celebration"
    //       className="-rotate-90 object-cover"
    //     />
    //   </div>
    //   <div className="absolute w-[40%] top-[120px] right-[150px] sm:w-[60%] md:w-[50%] lg:w-[30%] md:right-20 lg:right-40">
    //     <img
    //       src={chilada}
    //       alt="Chilada"
    //       className="-rotate-90 object-cover w-full h-full rounded-[27px]"
    //     />
    //   </div>
    // </div>
    <div
      data-aos="zoom-out"
      data-aos-duration="500"
      data-aos-once="false"
      className="relative"
    >
      <div
        className="absolute top-[250px] lg:-top-[80px] md:-top-40 left-1 lg:left-[100px] w-[40%] sm:w-[60%] md:w-[50%] lg:w-[30%] z-10"
        // data-aos="zoom-out"
        // data-aos-duration="500"
        // data-aos-once="true"
      >
        <img
          src={axum}
          alt="Axum"
          className="-rotate-90 rounded-br-lg object-cover"
        />
      </div>
      <div
        className="absolute top-[250px] lg:top-[93px] md:top-[132px] left-44 z-10 sm:right-24 md:left-36 lg:left-80"
        // data-aos="zoom-out"
        // data-aos-duration="500"
        // data-aos-once="true"
      >
        <img
          src={celebration}
          alt="celebration"
          className="-rotate-90 object-cover"
        />
      </div>
      <div
        // data-aos="zoom-out"
        // data-aos-duration="500"
        // data-aos-once="true"
        className="absolute w-[40%] top-[120px] right-[150px] sm:w-[60%] md:w-[50%] lg:w-[30%] md:right-20 lg:right-40"
      >
        <img
          src={chilada}
          alt="Chilada"
          className="-rotate-90 object-cover w-full h-full rounded-[27px]"
        />
      </div>
    </div>
  );
};

export default Section;
