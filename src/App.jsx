import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Soon from "./components/Soon/Soon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <div className=" overflow-hidden">
        <div className=" fixed ml-10 z-10">
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Soon />} />
          </Routes>
        </div>
        <div className=" z-20">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
