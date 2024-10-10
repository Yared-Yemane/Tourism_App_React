import React from "react";
import NavBar from "../NavBar/NavBar";
import Intro from "./Intro/Intro";
import Hero from "./Hero/Hero";
import More from "./More/More";
import Section from "./Section/Section";
import Summer from "./Summer/Summer";
import Cusisine from "./Cuisine/Cusisine";
import Culture from "./Culture/Culture";
import Destinations from "./Destinations/Destinations";
// import Intro from "./components/Home/Intro/Intro";
// import Intro from "../Intro/Intro";
// import Hero from "./components/Home/Hero/Hero";
// import More from "./components/Home/More/More";
// import Section from "./components/Home/Section/Section";
// import Summer from "./components/Home/Summer/Summer";
// import Cusisine from "./components/Home/Cuisine/Cusisine";
// import Culture from "./components/Home/Culture/Culture";
// import Destinations from "./components/Destinations/Destinations";
// import Footer from "./components/Home/Footer/Footer";
// import About from "./components/About/About";
//

const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-red-300 to-white ">
        {/* <div className=" ml-[50px] fixed z-10">
          <NavBar />
        </div> */}
        <div>
          <Intro />
        </div>
        <div className="bg-yellow-700 py-1 mt-1  bg-opacity-20">
          <Hero />
        </div>
        <div>
          <More />
        </div>
        <div className=" -mt-20">
          <Section />
        </div>
        <div className=" mt-80">
          <Summer />
        </div>
        <div className="">
          <Cusisine />
        </div>
        <div className="">
          <Culture />
        </div>
        <div className="">
          <Destinations />
        </div>
        {/* <div className="">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default Home;
