import React from "react";
import resort from "../../../assets/resort.jpg";
import Lalibela from "../../../assets/Lalibela.jpg";
import washa from "../../../assets/washa.jpg";
import nationalities from "../../../assets/nationalities.png";
import Slider from "react-slick";

const Destinations = () => {
  // <div className=" drop-shadow-2xl flex flex-col items-center py-14 bg-green-400 bg-opacity-30 pl-4">
  //   <div className=" text-3xl font-medium font-marko">
  //     <h1>Tourist Destinations</h1>
  //   </div>
  //   <div className=" grid grid-cols-4 justify-around -mt-5 px-10">
  //     <div className=" flex flex-col items-center">
  //       <div className=" -ml-4 mt-[58px] w-[260px] h-[143px] ">
  //         <img
  //           src={resort}
  //           alt="Resort"
  //           className="rounded-md w-full h-full object-cover -rotate-"
  //         />
  //       </div>
  //       <div className=" font-allerta mt-3 pl-2 ">
  //         <h1 className=" text-green-700 mb-1 text-lg ">
  //           Hotels and Resorts
  //         </h1>
  //         <p className=" w-[90%] text-sm">
  //           Ethiopia's hotels and resorts offer luxury, breathtaking views,
  //           and rich culture.
  //         </p>
  //       </div>
  //     </div>

  //     <div className=" flex flex-col items-center">
  //       <div className=" -ml-4 mt-[58px] w-[260px] h-[143px] ">
  //         <img
  //           src={Lalibela}
  //           alt="Resort"
  //           className="rounded-md w-full h-full object-cover"
  //         />
  //       </div>
  //       <div className=" font-allerta mt-3 pl-2 ">
  //         <h1 className=" text-green-700 mb-1 text-lg ">
  //           Hotels and Resorts
  //         </h1>
  //         <p className=" w-[90%] text-sm">
  //           Ethiopia's hotels and resorts offer luxury, breathtaking views,
  //           and rich culture.
  //         </p>
  //       </div>
  //     </div>

  //     <div className=" flex flex-col items-center">
  //       <div className=" -ml-4 mt-[58px] w-[260px] h-[143px] ">
  //         <img
  //           src={washa}
  //           alt="Resort"
  //           className="rounded-md w-full h-full object-cover"
  //         />
  //       </div>
  //       <div className=" font-allerta mt-3 pl-2 ">
  //         <h1 className=" text-green-700 mb-1 text-lg ">
  //           Hotels and Resorts
  //         </h1>
  //         <p className=" w-[90%] text-sm">
  //           Ethiopia's hotels and resorts offer luxury, breathtaking views,
  //           and rich culture.
  //         </p>
  //       </div>
  //     </div>

  //     <div className=" flex flex-col items-center">
  //       <div className=" -ml-4 mt-[58px] w-[260px] h-[143px] ">
  //         <img
  //           src={nationalities}
  //           alt="Resort"
  //           className="rounded-md w-full h-full object-cover"
  //         />
  //       </div>
  //       <div className=" font-allerta mt-3 pl-2 ">
  //         <h1 className=" text-green-700 mb-1 text-lg ">
  //           Hotels and Resorts
  //         </h1>
  //         <p className=" w-[90%] text-sm">
  //           Ethiopia's hotels and resorts offer luxury, breathtaking views,
  //           and rich culture.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // <div className="drop-shadow-2xl flex flex-col items-center py-14 bg-green-400 bg-opacity-30 pl-4">
  //   <div className="text-3xl font-medium font-marko mb-10">
  //     <h1>Tourist Destinations</h1>
  //   </div>
  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around -mt-5 px-10">
  //     {[
  //       {
  //         image: resort,
  //         title: "Hotels and Resorts",
  //         description:
  //           "Ethiopia's hotels and resorts offer luxury, breathtaking views, and rich culture.",
  //       },
  //       {
  //         image: Lalibela,
  //         title: "Historic Sites",
  //         description:
  //           "Explore the rich history and unique architecture of Ethiopia's historic sites.",
  //       },
  //       {
  //         image: washa,
  //         title: "Natural Wonders",
  //         description:
  //           "Experience the stunning natural landscapes and biodiversity of Ethiopia.",
  //       },
  //       {
  //         image: nationalities,
  //         title: "Cultural Heritage",
  //         description:
  //           "Discover the diverse cultures and traditions of Ethiopia's nationalities.",
  //       },
  //     ].map((destination, index) => (
  //       <div className="flex flex-col items-center" key={index}>
  //         <div className="mt-6 w-[260px] h-[143px]">
  //           <img
  //             src={destination.image}
  //             alt={destination.title}
  //             className="rounded-md w-full h-full object-cover"
  //           />
  //         </div>
  //         <div className="font-allerta mt-3 pl-16 lg:pl-4">
  //           <h1 className="text-green-700 mb-1 text-lg">
  //             {destination.title}
  //           </h1>
  //           <p className="w-[90%] text-sm">{destination.description}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  const destinations = [
    {
      image: resort,
      title: "Hotels and Resorts",
      description:
        "Ethiopia's hotels and resorts offer luxury, breathtaking views, and rich culture.",
    },
    {
      image: Lalibela,
      title: "Historic Sites",
      description:
        "Explore the rich history and unique architecture of Ethiopia's historic sites.",
    },
    {
      image: washa,
      title: "Natural Wonders",
      description:
        "Experience the stunning natural landscapes and biodiversity of Ethiopia.",
    },
    {
      image: nationalities,
      title: "Cultural Heritage",
      description:
        "Discover the diverse cultures and traditions of Ethiopia's nationalities.",
    },
    {
      image: resort,
      title: "Hotels and Resorts",
      description:
        "Ethiopia's hotels and resorts offer luxury, breathtaking views, and rich culture.",
    },
    {
      image: Lalibela,
      title: "Historic Sites",
      description:
        "Explore the rich history and unique architecture of Ethiopia's historic sites.",
    },
    {
      image: washa,
      title: "Natural Wonders",
      description:
        "Experience the stunning natural landscapes and biodiversity of Ethiopia.",
    },
    {
      image: nationalities,
      title: "Cultural Heritage",
      description:
        "Discover the diverse cultures and traditions of Ethiopia's nationalities.",
    },
    // Add more destinations here if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // One slide will show 4 items
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // 1 item per slide on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 items per slide on medium screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4, // 4 items per slide on larger screens
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div className="drop-shadow-2xl flex flex-col items-center overflow-hidden py-14 bg-green-400 bg-opacity-30 pl-4">
      <div className="text-3xl font-medium font-marko mb-10">
        <h1>Tourist Destinations</h1>
      </div>
      <Slider {...settings} className="w-full px-10">
        {destinations.map((destination, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="pl-14 md:pl-0 mt-6 w-full max-w-[260px] h-[143px]">
              <img
                src={destination.image}
                alt={destination.title}
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            <div className="font-allerta mt-3 pl-14 md:pl-1">
              <h1 className="text-green-700 mb-1 text-lg">
                {destination.title}
              </h1>
              <p className="w-full max-w-[90%] text-sm">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Destinations;
