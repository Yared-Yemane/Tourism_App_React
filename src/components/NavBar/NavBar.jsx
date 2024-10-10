import React from "react";
import { useEffect, useState } from "react";
// import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { div, use } from "framer-motion/client";

// const NavBar = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleScroll = () => {
//     // Determine the scroll position
//     const scrollTop = window.scrollY;

//     // Set the visibility of the navbar based on scroll position
//     if (scrollTop > 600) {
//       setIsVisible(false); // Hide navbar if scrolled more than 100px
//     } else {
//       setIsVisible(true); // Show navbar if scrolled back to the top
//     }
//   };

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // const [scrollPosition, setScrollPosition] = useState(0);
//   // const [logoColor, setLogoColor] = useState("text-black");

//   // collorChangeTrigger = 200;

//   // const handleScroll = () => {
//   //   setScrollPosition(window.scrollY);
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleScroll);

//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   // useEffect(() => {
//   //   if (scrollPosition >= collorChangeTrigger) {
//   //     setLogoColor("text-white");
//   //   } else {
//   //     setLogoColor("text-black");
//   //   }
//   // }, [scrollPosition]);
//   // const [isVisible, setIsVisible] = useState(false);

//   const toggleMenu = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     // <div className="relative">
//     //   <DarkMode />

//     //   {/* Hamburger Menu Button for Small Screens */}
//     //   <button
//     //     className="md:hidden flex items-center justify-center w-10 h-10 text-white bg-red-600 rounded-full absolute top-4 right-4 z-50"
//     //     onClick={toggleMenu}
//     //   >
//     //     {/* Hamburger Icon */}
//     //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
//     //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out my-1" />
//     //     <div className="block w-5 h-0.5 bg-white transform transition duration-300 ease-in-out" />
//     //   </button>

//     //   {/* Full-Screen Menu Overlay for Small Screens */}
//     //   <div
//     //     className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
//     //       isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
//     //     }`}
//     //   >
//     //     <nav
//     //       className={`flex flex-col items-center justify-center h-full transition-transform duration-300 transform ${
//     //         isVisible ? "translate-y-0" : "translate-y-full"
//     //       }`}
//     //     >
//     //       <NavLink
//     //         to="/"
//     //         className="text-white text-4xl mb-6"
//     //         onClick={toggleMenu}
//     //       >
//     //         Home
//     //       </NavLink>
//     //       <NavLink
//     //         to="/games"
//     //         className="text-white text-4xl mb-6"
//     //         onClick={toggleMenu}
//     //       >
//     //         Games
//     //       </NavLink>
//     //       <NavLink
//     //         to="/career"
//     //         className="text-white text-4xl mb-6"
//     //         onClick={toggleMenu}
//     //       >
//     //         Career
//     //       </NavLink>
//     //       <NavLink
//     //         to="/about"
//     //         className="text-white text-4xl mb-6"
//     //         onClick={toggleMenu}
//     //       >
//     //         About
//     //       </NavLink>
//     //       <NavLink
//     //         to="/contact"
//     //         className="text-white text-4xl mb-6"
//     //         onClick={toggleMenu}
//     //       >
//     //         Contact
//     //       </NavLink>
//     //     </nav>
//     //   </div>

//     //   {/* Original Navbar for Medium and Large Screens */}
//     //   <nav className="hidden md:flex md:items-center md:justify-between bg-white rounded-lg p-4">
//     //     <NavLink to="/">
//     //       <div className="flex justify-center items-center gap-[5px] pt-3 text-white w-[233px] h-[96px]">
//     //         <div className="text-[20px] pt-0.2 font-inria z-50">Explore</div>
//     //         <div className="text-[30px] font-bold font-aclonica z-50">
//     //           Ethiopia
//     //         </div>
//     //         <div className="inset-0 opacity-0 bg-red-600 rounded-[20px]"></div>
//     //       </div>
//     //     </NavLink>

//     //     <div className="flex justify-around items-center bg-white rounded-[20px] w-full md:w-[700px] h-auto md:h-[101px] mt-2 md:mt-0">
//     //       <NavLink
//     //         to="/"
//     //         className="flex-1 h-[100%] text-center hover:bg-red-600 rounded-tl-[20px] rounded-bl-[20px] p-2"
//     //       >
//     //         <div className="text-xl font-inter font-medium">Home</div>
//     //       </NavLink>
//     //       <NavLink
//     //         to="/games"
//     //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
//     //       >
//     //         <div className="text-xl font-inter font-medium">Games</div>
//     //       </NavLink>
//     //       <NavLink
//     //         to="/career"
//     //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
//     //       >
//     //         <div className="text-xl font-inter font-medium">Career</div>
//     //       </NavLink>
//     //       <NavLink
//     //         to="/about"
//     //         className="flex-1 h-[100%] text-center hover:bg-red-700 p-2"
//     //       >
//     //         <div className="text-xl font-inter font-medium">About</div>
//     //       </NavLink>
//     //       <NavLink
//     //         to="/contact"
//     //         className="flex-1 h-[100%] text-center hover:bg-red-700 rounded-tr-[20px] rounded-br-[20px] p-2"
//     //       >
//     //         <div className="text-xl font-inter font-medium">Contact</div>
//     //       </NavLink>
//     //     </div>
//     //   </nav>

//     //   <style jsx>
//     //     {`
//     //       .hidden {
//     //         transform: translateY(-100%);
//     //         opacity: 0;
//     //         transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//     //       }
//     //       .visible {
//     //         transform: translateY(0);
//     //         opacity: 1;
//     //         transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//     //       }
//     //     `}
//     //   </style>
//     // </div>

//     <div className="mt-4">
//       <button
//         className="md:hidden flex items-center justify-center w-10 h-10 text-red-600 bg-white border border-red-600 rounded-full"
//         onClick={toggleMenu}
//       >
//         {/* Hamburger Icon */}
//         <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out" />
//         <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out my-1" />
//         <div className="block w-5 h-0.5 bg-red-600 transform transition duration-300 ease-in-out" />
//       </button>

//       <nav
//         className={`navbar ${
//           isVisible ? "visible" : "hidden"
//         } md:flex md:items-center`}
//       >
//         <div className="flex flex-col md:flex-row justify-around gap-10 md:gap-20 lg:gap-60 mt-8 z-30">
//           <NavLink to="/">
//             <div className="flex justify-center items-center gap-2 md:gap-5 pt-3 text-white w-[180px] md:w-[233px] h-[80px] md:h-[96px]">
//               <div className="text-[18px] md:text-[20px] font-inria z-50">
//                 Explore
//               </div>
//               <div className="text-[24px] md:text-[30px] font-bold font-aclonica z-50">
//                 Ethiopia
//               </div>
//               <div className="inset-0 opacity-0 bg-red-600 rounded-[20px]"></div>
//             </div>
//           </NavLink>

//           <div className="flex flex-col md:flex-row justify-around items-center bg-white rounded-[20px] w-full md:w-[700px] h-[80px] md:h-[101px] bg-opacity-55">
//             <NavLink
//               to="/"
//               className="flex-1 h-[100%] text-center hover:bg-red-600 rounded-tl-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px]"
//             >
//               <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
//                 Home
//               </div>
//             </NavLink>
//             <NavLink
//               to="/"
//               className="flex-1 h-[100%] text-center hover:bg-red-700"
//             >
//               <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
//                 Destinations
//               </div>
//             </NavLink>
//             <NavLink
//               to="/"
//               className="flex-1 h-[100%] text-center hover:bg-red-700"
//             >
//               <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
//                 Career
//               </div>
//             </NavLink>
//             <NavLink
//               to="/about"
//               className="flex-1 h-[100%] text-center hover:bg-red-700"
//             >
//               <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
//                 About
//               </div>
//             </NavLink>
//             <NavLink
//               to="/"
//               className="flex-1 h-[100%] text-center hover:bg-red-700 rounded-tr-[20px] md:rounded-tr-[20px] md:rounded-br-[20px]"
//             >
//               <div className="pt-[20%] md:pt-[25%] text-lg md:text-xl font-inter font-medium">
//                 Contact
//               </div>
//             </NavLink>
//           </div>
//         </div>
//         <style jsx>
//           {`
//             .hidden {
//               transform: translateY(-100%);
//               opacity: 0;
//               transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//             }
//             .visible {
//               transform: translateY(0);
//               opacity: 1;
//               transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
//             }
//           `}
//         </style>
//       </nav>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [navBarVisible, setNavBarVisible] = useState(true);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setNavBarVisible(false);
    } else {
      setNavBarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` relative z-50 ${
        navBarVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300  `}
    >
      <NavLink to="/home">
        <div className=" absolute mt-10 flex justify-center gap-1 text-black">
          <h1 className=" mt-[2px] font-medium text-2xl">Explore</h1>
          <h1 className=" font-aclonica text-4xl">Ethiopia</h1>
        </div>
      </NavLink>

      <div className=" mt-20 absolute md:left-[300px] lg:left-[700px] md:mt-6 z-10 bg-opacity-100 md:bg-opacity-40 rounded-lg bg-black md:bg-white shadow-lg  transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-4">
          {/* <NavLink to="/">
            <div className="text-2xl font-bold text-white">
              Explore Ethiopia
            </div>
          </NavLink> */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-red-600 rounded-full transition duration-300"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isVisible ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          className={`md:flex md:items-center ${
            isVisible ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-2 md:pb-2">
            {["Home", "Destinations", "Career", "About", "Contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="py-2 text-lg text-white md:text-black font-medium hover:text-yellow-300 transition duration-300 relative group"
                >
                  {item}
                  <span className="block h-0.5 bg-yellow-300 w-0 transition-all duration-300 group-hover:w-full absolute bottom-0 left-0" />
                </NavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// export default Navbar;

// export default NavBar;
