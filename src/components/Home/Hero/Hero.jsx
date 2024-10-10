import React from "react";
import Religion from "../../../assets/religion.png";
import dinner from "../../../assets/dinner.png";
// import Lalibela from "../../assets/image.png";
import hamer from "../../../assets/hamer.png";
import fox from "../../../assets/fox.png";

const Hero = () => {
  return (
    // <div className=" flex justify-around mt-14 mb-5 rounded-md">
    //   <div className="relative shadow-md border-2  w-[18%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     {/* <div className="absolute bg-gradient-to-b from-green-300 to-yellow-400 w-full h-[100%] z-10 bottom-0 opacity-0 hover:opacity-30 hover:cursor-pointer transition-all duration-500"></div> */}
    //     <img
    //       src={Religion}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>
    //   <div className="relative shadow-md border-2  w-[18%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     {/* <div className="absolute bg-gradient-to-b from-yellow-300 to-green-400 w-full h-[100%] z-10 bottom-0 opacity-0 hover:opacity-30 hover:cursor-pointer transition-all duration-500"></div> */}
    //     <img
    //       src={dinner}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>
    //   <div className="relative shadow-md border-2  w-[18%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     {/* <div className="absolute bg-gradient-to-b from-blue-700 to-red-400 w-full h-[100%] z-10 bottom-0 opacity-0 hover:opacity-30 hover:cursor-pointer transition-all duration-500"></div> */}
    //     <img
    //       src={hamer}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>
    //   <div className="relative shadow-md border-2  w-[18%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     {/* <div className="absolute bg-gradient-to-b from-blue-300 to-red-600 w-full h-[100%] z-10 bottom-0 opacity-0 hover:opacity-30 hover:cursor-pointer transition-all duration-500"></div> */}
    //     <img
    //       src={fox}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>
    // </div>

    // <div className="flex flex-wrap justify-around mt-14 mb-5 gap-6">

    //   <div className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     <img
    //       src={Religion}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>

    //   <div className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     <img
    //       src={dinner}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>

    //   <div className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     <img
    //       src={hamer}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>

    //   <div className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]">
    //     <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
    //       Ethiopia: Rooted in Spiritual Heritage
    //     </h1>
    //     <img
    //       src={fox}
    //       alt="Religion"
    //       className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
    //     />
    //   </div>
    // </div>

    <div className="flex flex-wrap justify-around mt-14 mb-5 gap-6">
      <div
        className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]"
        data-aos="fade-up"
      >
        <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
          Ethiopia: Rooted in Spiritual Heritage
        </h1>
        <img
          src={Religion}
          alt="Religion"
          className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
        />
      </div>

      <div
        className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
          Ethiopia: Rooted in Spiritual Heritage
        </h1>
        <img
          src={dinner}
          alt="Dinner"
          className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
        />
      </div>

      <div
        className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
          Ethiopia: Rooted in Spiritual Heritage
        </h1>
        <img
          src={hamer}
          alt="Hamer"
          className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
        />
      </div>

      <div
        className="relative shadow-md border-2 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] h-[300px] overflow-hidden rounded-[27px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="text-center absolute bottom-[15%] font-bold font-varela text-white text-xl z-20 opacity-0 hover:opacity-100 hover:cursor-pointer transition-all duration-500">
          Ethiopia: Rooted in Spiritual Heritage
        </h1>
        <img
          src={fox}
          alt="Fox"
          className="absolute w-full h-full object-cover hover:scale-105 hover:cursor-pointer transition-transform duration-500"
        />
      </div>
    </div>

    // </div>
  );
};

export default Hero;
