import React from "react";
import {
  FaLeaf,
  FaGlobe,
  FaHandsHelping,
  FaCameraRetro,
  FaInfoCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    // <div className="bg-red-100 min-h-screen flex flex-col items-center font-marko">
    //   <header
    //     className="bg-cover bg-center h-96 w-full"
    //     style={{
    //       backgroundImage:
    //         "url('https://media.licdn.com/dms/image/C5612AQEvGU5mX85jRQ/article-cover_image-shrink_600_2000/0/1520199197783?e=2147483647&v=beta&t=gbSphTMeH9i3Gw-utgYYe-nk7MNahH04rPdOhqPlJ4I')",
    //     }}
    //   >
    //     <div className="flex items-center justify-center h-full bg-green-500 bg-opacity-30">
    //       <h1 className="text-5xl text-white font-bold drop-shadow-md mt-28">
    //         About Us
    //       </h1>
    //     </div>
    //   </header>

    //   <main className="container mx-auto p-6">
    //     <section className="text-center py-10">
    //       <h2 className="text-4xl font-semibold text-gray-800">
    //         Welcome to Explore Ethiopia Tourism App
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
    //         Discover the beauty, culture, and history of Ethiopia. Our app aims
    //         to provide travelers with an immersive experience through
    //         comprehensive guides, stunning visuals, and unique local insights
    //         that highlight the richness of Ethiopian heritage.
    //       </p>
    //     </section>

    //     <section className="  grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
    //       <div className="bg-white p-6 rounded-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaGlobe className="text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
    //         <p className="mt-2 text-gray-600">
    //           To connect travelers with the rich heritage and breathtaking
    //           landscapes of Ethiopia, fostering a love for exploration and
    //           cultural exchange.
    //         </p>
    //       </div>

    //       <div className="bg-white p-6  hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaLeaf className="text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold mt-4">Our Vision</h3>
    //         <p className="mt-2 text-gray-600">
    //           To be the leading platform for Ethiopian tourism, inspiring
    //           travelers to explore hidden gems and sustainable travel
    //           experiences.
    //         </p>
    //       </div>

    //       <div className="bg-white p-6  hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaHandsHelping className="text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold mt-4">Our Values</h3>
    //         <p className="mt-2 text-gray-600">
    //           We believe in sustainability, cultural respect, and empowering
    //           local communities through tourism, ensuring that all voices are
    //           heard.
    //         </p>
    //       </div>
    //     </section>

    //     <section className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
    //       <div className="bg-white p-6  hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaCameraRetro className="text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold mt-4">
    //           Capture Your Memories
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           Our app features stunning photography and detailed itineraries
    //           that help you capture the essence of Ethiopia. From the Simien
    //           Mountains to the ancient rock-hewn churches of Lalibela, every
    //           moment is worth remembering.
    //         </p>
    //       </div>

    //       <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
    //         <FaInfoCircle className="text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-xl font-semibold mt-4">Local Insights</h3>
    //         <p className="mt-2 text-gray-600">
    //           We provide insider tips from locals and seasoned travelers,
    //           ensuring that you experience Ethiopia like never before. Discover
    //           hidden eateries, cultural events, and more!
    //         </p>
    //       </div>
    //     </section>

    //     <section className="text-center py-10 ">
    //       <h2 className="text-4xl font-semibold text-gray-800">Our Story</h2>
    //       <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
    //         Founded by a group of passionate travelers, our app originated from
    //         a desire to share Ethiopia’s hidden wonders with the world. We
    //         started as a simple guide and have evolved into a comprehensive
    //         resource for tourists, ensuring that everyone can experience the
    //         warmth and beauty of Ethiopian culture.
    //       </p>
    //     </section>

    //     <section className="text-center py-10 bg-yellow-200 rounded-lg">
    //       <h2 className="text-4xl font-semibold text-gray-800">Join Us</h2>
    //       <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
    //         Whether you are a local or a traveler, we invite you to be a part of
    //         our community. Join us in promoting Ethiopia's incredible tourism
    //         potential, and let’s create unforgettable experiences together!
    //       </p>
    //       <button className="mt-6 bg-red-500 text-white hover:text-black px-4 py-2 rounded-lg hover:bg-white hover:border-solid hover:border-[1px] border-black transition duration-300">
    //         Get Started
    //       </button>
    //     </section>
    //   </main>

    //   {/* <footer className="bg-gray-800 text-white text-center py-4">
    //     <p>&copy; 2024 Ethiopian Tourism App. All Rights Reserved.</p>
    //     <div className="flex justify-center space-x-4 mt-2">
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-facebook"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-instagram"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-youtube"></i>
    //       </a>
    //     </div>
    //   </footer> */}
    // </div>
    // <div className="bg-red-100 min-h-screen flex flex-col items-center font-marko">
    //   <header
    //     className="bg-cover bg-center h-64 md:h-96 w-full"
    //     style={{
    //       backgroundImage:
    //         "url('https://media.licdn.com/dms/image/C5612AQEvGU5mX85jRQ/article-cover_image-shrink_600_2000/0/1520199197783?e=2147483647&v=beta&t=gbSphTMeH9i3Gw-utgYYe-nk7MNahH04rPdOhqPlJ4I')",
    //     }}
    //   >
    //     <div className="flex items-center justify-center h-full bg-green-500 bg-opacity-30">
    //       <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md mt-16 md:mt-28">
    //         About Us
    //       </h1>
    //     </div>
    //   </header>

    //   <main className="container mx-auto p-4 md:p-6">
    //     <section className="text-center py-10">
    //       <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
    //         Welcome to Explore Ethiopia Tourism App
    //       </h2>
    //       <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
    //         Discover the beauty, culture, and history of Ethiopia. Our app aims
    //         to provide travelers with an immersive experience through
    //         comprehensive guides, stunning visuals, and unique local insights
    //         that highlight the richness of Ethiopian heritage.
    //       </p>
    //     </section>

    //     <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-10">
    //       <div className="bg-white p-4 md:p-6 rounded-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaGlobe className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-lg md:text-xl font-semibold mt-4">
    //           Our Mission
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           To connect travelers with the rich heritage and breathtaking
    //           landscapes of Ethiopia, fostering a love for exploration and
    //           cultural exchange.
    //         </p>
    //       </div>

    //       <div className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaLeaf className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-lg md:text-xl font-semibold mt-4">
    //           Our Vision
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           To be the leading platform for Ethiopian tourism, inspiring
    //           travelers to explore hidden gems and sustainable travel
    //           experiences.
    //         </p>
    //       </div>

    //       <div className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaHandsHelping className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-lg md:text-xl font-semibold mt-4">
    //           Our Values
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           We believe in sustainability, cultural respect, and empowering
    //           local communities through tourism, ensuring that all voices are
    //           heard.
    //         </p>
    //       </div>
    //     </section>

    //     <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
    //       <div className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaCameraRetro className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-lg md:text-xl font-semibold mt-4">
    //           Capture Your Memories
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           Our app features stunning photography and detailed itineraries
    //           that help you capture the essence of Ethiopia. From the Simien
    //           Mountains to the ancient rock-hewn churches of Lalibela, every
    //           moment is worth remembering.
    //         </p>
    //       </div>

    //       <div className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    //         <FaInfoCircle className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
    //         <h3 className="text-lg md:text-xl font-semibold mt-4">
    //           Local Insights
    //         </h3>
    //         <p className="mt-2 text-gray-600">
    //           We provide insider tips from locals and seasoned travelers,
    //           ensuring that you experience Ethiopia like never before. Discover
    //           hidden eateries, cultural events, and more!
    //         </p>
    //       </div>
    //     </section>

    //     <section className="text-center py-10">
    //       <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
    //         Our Story
    //       </h2>
    //       <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
    //         Founded by a group of passionate travelers, our app originated from
    //         a desire to share Ethiopia’s hidden wonders with the world. We
    //         started as a simple guide and have evolved into a comprehensive
    //         resource for tourists, ensuring that everyone can experience the
    //         warmth and beauty of Ethiopian culture.
    //       </p>
    //     </section>

    //     <section className="text-center py-10 bg-yellow-200 rounded-lg">
    //       <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
    //         Join Us
    //       </h2>
    //       <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
    //         Whether you are a local or a traveler, we invite you to be a part of
    //         our community. Join us in promoting Ethiopia's incredible tourism
    //         potential, and let’s create unforgettable experiences together!
    //       </p>
    //       <button className="mt-6 bg-red-500 text-white hover:text-black px-4 py-2 rounded-lg hover:bg-white hover:border-solid hover:border-[1px] border-black transition duration-300">
    //         Get Started
    //       </button>
    //     </section>
    //   </main>
    //   {/*
    //   <footer className="bg-gray-800 text-white text-center py-4">
    //     <p>&copy; 2024 Ethiopian Tourism App. All Rights Reserved.</p>
    //     <div className="flex justify-center space-x-4 mt-2">
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-facebook"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-instagram"></i>
    //       </a>
    //       <a href="#" className="text-gray-400 hover:text-white">
    //         <i className="fab fa-youtube"></i>
    //       </a>
    //     </div>
    //   </footer> */}
    // </div>
    <div className="bg-red-100 min-h-screen flex flex-col items-center font-marko">
      <header
        className="bg-cover bg-center h-64 md:h-96 w-full"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/C5612AQEvGU5mX85jRQ/article-cover_image-shrink_600_2000/0/1520199197783?e=2147483647&v=beta&t=gbSphTMeH9i3Gw-utgYYe-nk7MNahH04rPdOhqPlJ4I')",
        }}
        data-aos="fade-down"
      >
        <div className="flex flex-col items-center justify-center h-full bg-green-500 bg-opacity-30">
          <h1 className="text-3xl md:text-5xl text-white font-bold drop-shadow-md mt-16 md:mt-28">
            About Us
          </h1>
          <NavLink to="/">
            <div className=" text-center mt-[30px] drop-shadow-2xl w-40 h-[65px] bg-red-600 rounded-[18px] text-white font-allerta hover:bg-white hover:text-black hover:border-solid hover:border-[1px] hover:border-black">
              <button className="text-center mt-5">Back to Home</button>
            </div>
          </NavLink>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <section className="text-center py-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Welcome to Explore Ethiopia Tourism App
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the beauty, culture, and history of Ethiopia. Our app aims
            to provide travelers with an immersive experience through
            comprehensive guides, stunning visuals, and unique local insights
            that highlight the richness of Ethiopian heritage.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 my-10">
          <div
            className="bg-white p-4 md:p-6 rounded-lg hover:cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <FaGlobe className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              Our Mission
            </h3>
            <p className="mt-2 text-gray-600">
              To connect travelers with the rich heritage and breathtaking
              landscapes of Ethiopia, fostering a love for exploration and
              cultural exchange.
            </p>
          </div>

          <div
            className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <FaLeaf className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              Our Vision
            </h3>
            <p className="mt-2 text-gray-600">
              To be the leading platform for Ethiopian tourism, inspiring
              travelers to explore hidden gems and sustainable travel
              experiences.
            </p>
          </div>

          <div
            className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
          >
            <FaHandsHelping className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              Our Values
            </h3>
            <p className="mt-2 text-gray-600">
              We believe in sustainability, cultural respect, and empowering
              local communities through tourism, ensuring that all voices are
              heard.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div
            className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-right"
          >
            <FaCameraRetro className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              Capture Your Memories
            </h3>
            <p className="mt-2 text-gray-600">
              Our app features stunning photography and detailed itineraries
              that help you capture the essence of Ethiopia. From the Simien
              Mountains to the ancient rock-hewn churches of Lalibela, every
              moment is worth remembering.
            </p>
          </div>

          <div
            className="bg-white p-4 md:p-6 hover:cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-left"
          >
            <FaInfoCircle className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">
              Local Insights
            </h3>
            <p className="mt-2 text-gray-600">
              We provide insider tips from locals and seasoned travelers,
              ensuring that you experience Ethiopia like never before. Discover
              hidden eateries, cultural events, and more!
            </p>
          </div>
        </section>

        <section className="text-center py-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Story
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Founded by a group of passionate travelers, our app originated from
            a desire to share Ethiopia’s hidden wonders with the world. We
            started as a simple guide and have evolved into a comprehensive
            resource for tourists, ensuring that everyone can experience the
            warmth and beauty of Ethiopian culture.
          </p>
        </section>

        <section
          className="text-center py-10 bg-yellow-200 rounded-lg"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Join Us
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you are a local or a traveler, we invite you to be a part of
            our community. Join us in promoting Ethiopia's incredible tourism
            potential, and let’s create unforgettable experiences together!
          </p>
          <button className="mt-6 bg-red-500 text-white hover:text-black px-4 py-2 rounded-lg hover:bg-white hover:border-solid hover:border-[1px] border-black transition duration-300">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
