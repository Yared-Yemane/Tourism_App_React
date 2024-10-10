import React from "react";
import Ashenda from "../../../assets/Ashenda.png";

const Culture = () => {
  return (
    // <div className=" flex justify-center">
    //   <div className=" text-center w-[55%] mt-[15%] -mr-24 text-xl leading-9 text-blue-600 font-bold font-marko">
    //     <p>
    //       “ The festival is not only a celebration of <br />religious devotion, but
    //       also a powerful display of women’s <br /> freedom and empowerment.<br /><br />
    //       {/* <hr class="border-t-4 border-blue-300 w-20 mx-auto my-6 rounded-full"></hr> */}
    //       Tall, graceful skirts, a holyday known as ashenda , where girls sway
    //       and move rhythmically to the beat of drums and traditional
    //       instruments. ”
    //     </p>
    //   </div>
    //   <div>
    //     <img src={Ashenda} alt="Ashenda" className=" -rotate-90 -mt-10" />
    //   </div>
    // </div>
    // <div className="flex flex-col md:flex-row justify-center items-center">
    //   <div className="text-center w-[90%] md:w-[55%] ml-[5%] text-xl leading-9 text-blue-600 font-bold font-marko">
    //     <p>
    //       “ Ashenda and Shadey festivals are not only a celebration of <br />
    //       religious devotion, but also a powerful display of women’s <br />
    //       freedom and empowerment.
    //       <br />
    //       <br />
    //       Tall, graceful skirts, where girls sway
    //       and move rhythmically to the beat of drums and traditional
    //       instruments. ”
    //     </p>
    //   </div>
    //   <div>
    //     <img src={Ashenda} alt="Ashenda" className="-rotate-90 md:-mt-14 -ml-[40px]" />
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div
        className="text-center w-[90%] md:w-[55%] ml-[5%] text-xl leading-9 text-blue-600 font-bold font-marko"
        data-aos="fade-right" // Animation effect
        data-aos-duration="500" // Duration of animation
        data-aos-once="false" // Play animation only once
      >
        <p>
          “ Ashenda and Shadey festivals are not only a celebration of <br />
          religious devotion, but also a powerful display of women’s <br />
          freedom and empowerment.
          <br />
          <br />
          Tall, graceful skirts, where girls sway and move rhythmically to the
          beat of drums and traditional instruments. ”
        </p>
      </div>
      <div
        data-aos="fade-left" // Animation effect for the image
        data-aos-duration="500" // Duration of animation
        data-aos-once="false" // Play animation only once
      >
        <img
          src={Ashenda}
          alt="Ashenda"
          className="-rotate-90 md:-mt-14 -ml-[40px]"
        />
      </div>
    </div>
  );
};

export default Culture;
