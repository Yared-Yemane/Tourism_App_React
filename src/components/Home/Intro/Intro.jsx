import React from "react";
import NavBar from "../../NavBar/NavBar";
import dayLight from "../../../assets/daylight.png";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Intro = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     easing: "ease-in-sine",
  //     delay: 100,
  //     offset: 100,
  //   });
  //   AOS.refresh();
  // }, []);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textColor, setTextColor] = useState("text-black");

  const scrollTrigger = 500;
  const collorChangeTrigger = 190;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition >= collorChangeTrigger) {
      setTextColor("text-white");
    } else {
      setTextColor("text-black");
    }
  }, [scrollPosition]);
  return (
    <>
      {/* <NavBar /> */}
      {/* <div className=" w-full relative rounded-md">
        <div>
          <img src={dayLight} alt="intro image" className=" w-full" />
        </div>
        <div
          className={`fixed font-merriwether top-52 pt-[10%] pl-[20%] ${textColor}`}
          style={{
            transform:
              scrollPosition >= scrollTrigger
                ? `translateY(${scrollPosition - scrollTrigger}px) `
                : "translateY(0)",
            //   setPosition("fixed")
            // : setPosition(""),

            // transform: scrollPosition >= 200 ? "color-white" : "color-black",
          }}
        >
          <h1 className="font-extrabold text-4xl">
            “A Tapestry of Resilience and Ancient Glory”
          </h1>

          <p className=" text-xl w-[60%] font-bold p-4">
            Ethiopia the cradle of human civilization, stands as a land where
            the weight of ancient history and the resilience of its people
            intertwine.
          </p>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <div className="w-full relative rounded-md">
        <div>
          <img
            src={dayLight}
            alt="intro image"
            className="w-full object-cover"
          />
        </div>
        <div
          className={`fixed font-merriwether top-48 pt-[15%] pl-[5%] md:pt-[10%] md:pl-[10%] lg:pt-[7%] lg:pl-[15%] xl:pt-[5%] xl:pl-[20%] ${textColor}`}
          style={{
            transform:
              scrollPosition >= scrollTrigger
                ? `translateY(${scrollPosition - scrollTrigger}px)`
                : "translateY(0)",
          }}
        >
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-4xl leading-tight"
          >
            “A Tapestry of Resilience and Ancient Glory”
          </h1>
          <p
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-base md:text-md lg:text-lg xl:text-xl w-[90%] md:w-[70%] lg:w-[60%] font-bold p-4 md:p-6 lg:p-8"
          >
            Ethiopia, the cradle of human civilization, stands as a land where
            the weight of ancient history and the resilience of its people
            intertwine.
          </p>
          <NavLink to="/about" className="">
            <div className=" text-center ml-36 md:ml-80  mb-20 drop-shadow-2xl w-40 h-[65px] bg-red-600 rounded-[18px] text-white font-allerta hover:bg-white hover:text-black hover:border-solid hover:border-[1px] hover:border-black">
              <button className="text-center mt-5">Learn More</button>
            </div>
          </NavLink>
        </div>
        <div className=" flex justify-center"></div>
      </div>
    </>
  );
};

export default Intro;
