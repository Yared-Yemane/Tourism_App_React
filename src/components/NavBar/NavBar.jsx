import React from "react";
import { useEffect, useState } from "react";
// import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    // Determine the scroll position
    const scrollTop = window.scrollY;

    // Set the visibility of the navbar based on scroll position
    if (scrollTop > 600) {
      setIsVisible(false); // Hide navbar if scrolled more than 100px
    } else {
      setIsVisible(true); // Show navbar if scrolled back to the top
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [logoColor, setLogoColor] = useState("text-black");

  // collorChangeTrigger = 200;

  // const handleScroll = () => {
  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (scrollPosition >= collorChangeTrigger) {
  //     setLogoColor("text-white");
  //   } else {
  //     setLogoColor("text-black");
  //   }
  // }, [scrollPosition]);
  // const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    // <div className="relative">
    //   <DarkMode />

    //   {/* Hamburger Menu Button for Small Screens */}
    //   <button
    //     className="md:hidden flex items-center justify-center w-10 h-10 text-white bg-red-600 rounded-full absolute top-4 right-4 z-50"
    //     onClick={toggleMenu}
    //   >
    //     {/* Hamburger Icon */}
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out my-1" />
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
    //   </button>

    //   {/* Full-Screen Menu Overlay for Small Screens */}
    //   <div
    //     className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
    //       isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    //     }`}
    //   >
    //     <nav
    //       className={`flex flex-col items-center justify-center h-full transition-transform duration-300 transform ${
    //         isVisible ? "translate-y-0" : "translate-y-full"
    //       }`}
    //     >
    //       <NavLink
    //         to="/"
    //         className="text-white text-4xl mb-6"
    //         onClick={toggleMenu}
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         to="/games"
    //         className="text-white text-4xl mb-6"
    //         onClick={toggleMenu}
    //       >
    //         Games
    //       </NavLink>
    //       <NavLink
    //         to="/career"
    //         className="text-white text-4xl mb-6"
    //         onClick={toggleMenu}
    //       >
    //         Career
    //       </NavLink>
    //       <NavLink
    //         to="/about"
    //         className="text-white text-4xl mb-6"
    //         onClick={toggleMenu}
    //       >
    //         About
    //       </NavLink>
    //       <NavLink
    //         to="/contact"
    //         className="text-white text-4xl mb-6"
    //         onClick={toggleMenu}
    //       >
    //         Contact
    //       </NavLink>
    //     </nav>
    //   </div>

    //   {/* Original Navbar for Medium and Large Screens */}
    //   <nav className="hidden md:flex md:items-center md:justify-between bg-white rounded-lg p-4">
    //     <NavLink to="/">
    //       <div className="flex justify-center items-center gap-[5px] pt-3 text-white w-[233px] h-[96px]">
    //         <div className="text-[20px] pt-0.2 font-inria z-50">Explore</div>
    //         <div className="text-[30px] font-bold font-aclonica z-50">
    //           Ethiopia
    //         </div>
    //         <div className="inset-0 opacity-0 bg-red-600 rounded-[20px]"></div>
    //       </div>
    //     </NavLink>

    //     <div className="flex justify-around items-center bg-white rounded-[20px] w-full md:w-[700px] h-auto md:h-[101px] mt-2 md:mt-0">
    //       <NavLink
    //         to="/"
    //         className="flex-1 h-[100%] text-center hover:bg-red-600 rounded-tl-[20px] rounded-bl-[20px] p-2"
    //       >
    //         <div className="text-xl font-inter font-medium">Home</div>
    //       </NavLink>
    //       <NavLink
    //         to="/games"
    //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
    //       >
    //         <div className="text-xl font-inter font-medium">Games</div>
    //       </NavLink>
    //       <NavLink
    //         to="/career"
    //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
    //       >
    //         <div className="text-xl font-inter font-medium">Career</div>
    //       </NavLink>
    //       <NavLink
    //         to="/about"
    //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
    //       >
    //         <div className="text-xl font-inter font-medium">About</div>
    //       </NavLink>
    //       <NavLink
    //         to="/contact"
    //         className="flex-1 h-[100%] text-center hover:bg-red-700 rounded-tr-[20px] rounded-br-[20px] p-2"
    //       >
    //         <div className="text-xl font-inter font-medium">Contact</div>
    //       </NavLink>
    //     </div>
    //   </nav>

    //   <style jsx>
    //     {`
    //       .hidden {
    //         transform: translateY(-100%);
    //         opacity: 0;
    //         transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    //       }
    //       .visible {
    //         transform: translateY(0);
    //         opacity: 1;
    //         transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    //       }
    //     `}
    //   </style>
    // </div>

    // <div className="mt-4">
    //   <DarkMode />
    //   {/* Hamburger Menu Button */}
    //   <button
    //     className="md:hidden flex items-center justify-center w-10 h-10 text-white bg-red-600 rounded-full"
    //     onClick={toggleMenu}
    //   >
    //     {/* Hamburger Icon */}
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out my-1" />
    //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
    //   </button>

    //   <nav
    //     className={`navbar ${
    //       isVisible ? "visible" : "hidden"
    //     } md:flex md:items-center`}
    //   >
    //     <div
    //       className={
    //         "flex flex-col md:flex-row justify-around gap-60 mt-[43px] z-30"
    //       }
    //     >
    //       <NavLink to="/">
    //         <div
    //           className={`flex justify-center items-center gap-[5px] pt-3 text-white w-[233px] h-[96px]`}
    //         >
    //           <div className="text-[20px] pt-0.2 font-inria z-50">Explore</div>
    //           <div className="text-[30px] font-bold font-aclonica z-50">
    //             Ethiopia
    //           </div>
    //           <div className="inset-0 opacity-0 bg-red-600 rounded-[20px]"></div>
    //         </div>
    //       </NavLink>

    //       <div className="flex flex-col md:flex-row justify-around items-center bg-white rounded-[20px] w-[700px] h-[101px] bg-opacity-55">
    //         <NavLink
    //           to="/"
    //           className="flex-1 h-[100%] text-center hover:bg-red-600 rounded-tl-[20px] rounded-bl-[20px]"
    //         >
    //           <div className="pt-[25%] text-xl font-inter font-medium">
    //             Home
    //           </div>
    //         </NavLink>
    //         <NavLink
    //           to="/"
    //           className="flex-1 h-[100%] text-center hover:bg-red-700"
    //         >
    //           <div className="pt-[25%] text-xl font-inter font-medium">
    //             Games
    //           </div>
    //         </NavLink>
    //         <NavLink
    //           to="/career"
    //           className="flex-1 h-[100%] text-center hover:bg-red-700"
    //         >
    //           <div className="pt-[25%] text-xl font-inter font-medium">
    //             Career
    //           </div>
    //         </NavLink>
    //         <NavLink
    //           to="/about"
    //           className="flex-1 h-[100%] text-center hover:bg-red-700"
    //         >
    //           <div className="pt-[25%] text-xl font-inter font-medium">
    //             About
    //           </div>
    //         </NavLink>
    //         <NavLink
    //           to="/contact"
    //           className="flex-1 h-[100%] text-center hover:bg-red-700 rounded-tr-[20px] rounded-br-[20px]"
    //         >
    //           <div className="pt-[25%] text-xl font-inter font-medium">
    //             Contact
    //           </div>
    //         </NavLink>
    //       </div>
    //     </div>
    //     <style jsx>
    //       {`
    //         .hidden {
    //           transform: translateY(-100%);
    //           opacity: 0;
    //           transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    //         }
    //         .visible {
    //           transform: translateY(0);
    //           opacity: 1;
    //           transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    //         }
    //       `}
    //     </style>
    //   </nav>
    // </div>

    <div className="mt-4">
      {/* <DarkMode /> */}
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-red-600 bg-white border border-red-600 rounded-full"
        onClick={toggleMenu}
      >
        {/* Hamburger Icon */}
        <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out" />
        <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out my-1" />
        <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out" />
      </button>

      <nav
        className={`navbar ${
          isVisible ? "visible" : "hidden"
        } md:flex md:items-center`}
      >
        <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-20 lg:gap-60 mt-8 z-30">
          <NavLink to="/">
            <div className="flex justify-center items-center gap-2 md:gap-5 pt-3 text-white w-[180px] md:w-[233px] h-[80px] md:h-[96px]">
              <div className="text-[18px] md:text-[20px] font-inria z-50">
                Explore
              </div>
              <div className="text-[24px] md:text-[30px] font-bold font-aclonica z-50">
                Ethiopia
              </div>
              <div className="inset-0 opacity-0 bg-red-600 rounded-[20px]"></div>
            </div>
          </NavLink>

          <div className="flex flex-col md:flex-row justify-around items-center bg-white rounded-[20px] w-full md:w-[700px] h-[80px] md:h-[101px] bg-opacity-55">
            <NavLink
              to="/"
              className="flex-1 h-[100%] text-center hover:bg-red-600 rounded-tl-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px]"
            >
              <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
                Home
              </div>
            </NavLink>
            <NavLink
              to="/"
              className="flex-1 h-[100%] text-center hover:bg-red-700"
            >
              <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
                Destinations
              </div>
            </NavLink>
            <NavLink
              to="/career"
              className="flex-1 h-[100%] text-center hover:bg-red-700"
            >
              <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
                Career
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className="flex-1 h-[100%] text-center hover:bg-red-700"
            >
              <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
                About
              </div>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex-1 h-[100%] text-center hover:bg-red-700 rounded-tr-[20px] md:rounded-tr-[20px] md:rounded-br-[20px]"
            >
              <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
                Contact
              </div>
            </NavLink>
          </div>
        </div>
        <style jsx>
          {`
            .hidden {
              transform: translateY(-100%);
              opacity: 0;
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }
            .visible {
              transform: translateY(0);
              opacity: 1;
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }
          `}
        </style>
      </nav>
    </div>
  );
};

export default NavBar;
