import React from "react";
import eagle from "../../../assets/eagle.png";

const More = () => {
  return (
    // <div className=" relative mb-5 text-center flex flex-col items-center gap-5 justify-center mt-[5%] font-marko z-10">
    //   <div className=" text-2xl mb-7 font-bold">
    //     <h1>Discover the Wonders</h1>
    //   </div>
    //   <div className=" leading-[60px] text-4xl mx-[13%] font-bold">
    //     <h1>Ethiopia: An Exquisite Journey Through Time and Majesty</h1>
    //   </div>
    //   <div className=" mx-[13%] text-lg font-bold">
    //     <p>
    //       Welcome to Ethiopia, a land where ancient history, vibrant cultures,
    //       and breathtaking landscapes come together to create unforgettable
    //       experiences. Known as the cradle of humanity, Ethiopia offers a rich
    //       tapestry of destinations that will captivate your heart and soul.
    //     </p>
    //   </div>
    //   <a href="">
    //     <div className=" mt-12 drop-shadow-2xl w-40 h-[65px] bg-red-600 rounded-[18px] text-white font-allerta hover:bg-white hover:text-black hover:border-solid hover:border-[1px] hover:border-black">
    //       <button className=" text-center mt-5">Learn More</button>
    //     </div>
    //   </a>
    //   <div className=" absolute top-0 right-10 -rotate-[65deg] w-60 h-60">
    //     <img src={eagle} alt="Eagle" />
    //   </div>
    // </div>

    <div className="relative mb-5 text-center flex flex-col items-center gap-5 justify-center mt-[5%] font-marko z-10">
      <div className="text-2xl mb-7 font-bold">
        <h1>Discover the Wonders</h1>
      </div>
      <div className="leading-[60px] text-4xl md:text-3xl sm:text-2xl mx-[13%] sm:mx-[5%] font-bold">
        <h1>
          Ethiopia: An Exquisite Journey Through <br /> Time and Majesty
        </h1>
      </div>
      <div className="mx-[13%] sm:mx-[5%] text-lg sm:text-base font-bold">
        <p>
          Welcome to Ethiopia, a land where ancient history, vibrant cultures,
          and breathtaking landscapes come together to create unforgettable
          experiences. Known as the cradle of humanity, Ethiopia offers a rich
          tapestry of destinations that will captivate your heart and soul.
        </p>
      </div>
      <a href="">
        <div className="mt-12 drop-shadow-2xl w-40 h-[65px] bg-red-600 rounded-[18px] text-white font-allerta hover:bg-white hover:text-black hover:border-solid hover:border-[1px] hover:border-black">
          <button className="text-center mt-5">Learn More</button>
        </div>
      </a>
      <div className="absolute -top-5 -right-14 md:-top-20 lg:-top-8 md:-right-20 lg:right-14 -rotate-[65deg] w-48 md:w-48 lg:w-60 md:h-60">
        <img src={eagle} alt="Eagle" />
      </div>
    </div>

    // <div className="relative mb-5 text-center flex flex-col items-center gap-5 justify-center mt-[5%] font-marko z-10">
    //   <div className="text-2xl mb-7 font-bold">
    //     <h1>Discover the Wonders</h1>
    //   </div>
    //   <div className="leading-[60px] text-4xl md:text-3xl sm:text-2xl mx-[13%] sm:mx-[5%] font-bold">
    //     <h1>
    //       Ethiopia: An Exquisite Journey Through <br /> Time and Majesty
    //     </h1>
    //   </div>
    //   <div className="mx-[13%] sm:mx-[5%] text-lg sm:text-base font-bold">
    //     <p>
    //       Welcome to Ethiopia, a land where ancient history, vibrant cultures,
    //       and breathtaking landscapes come together to create unforgettable
    //       experiences. Known as the cradle of humanity, Ethiopia offers a rich
    //       tapestry of destinations that will captivate your heart and soul.
    //     </p>
    //   </div>
    //   <a href="">
    //     <div className="mt-12 drop-shadow-2xl w-40 h-[65px] bg-red-600 rounded-[18px] text-white font-allerta hover:bg-white hover:text-black hover:border-solid hover:border-[1px] hover:border-black">
    //       <button className="text-center mt-5">Learn More</button>
    //     </div>
    //   </a>
    //   <div
    //     className="absolute -top-5 -right-14 md:-top-20 lg:-top-8 md:-right-20 lg:right-14 w-48 md:w-48 lg:w-60 md:h-60 sliding"
    //     data-aos="fade-left"
    //   >
    //     <img src={eagle} alt="Eagle" className="w-full h-full object-cover" />
    //   </div>
    // </div>
  );
};

export default More;
