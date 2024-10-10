import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-gray-900 text-white py-10 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              Explore breathtaking destinations with us. We offer the best
              travel experiences for adventurous spirits seeking unique journeys
              around the world.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Tours & Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon="envelope" className="mr-2" />
                <a
                  href="mailto:info@travelco.com"
                  className="hover:underline text-gray-400"
                >
                  info@explorethiopia.com
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon="phone" className="mr-2" />
                <a
                  href="tel:+1234567890"
                  className="hover:underline text-gray-400"
                >
                  +251 1245 67890
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon="map-marker-alt" className="mr-2" />
                <span className="text-gray-400">123 Main St., Addis Ababa</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay connected through our social channels for the latest updates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} className="fa-2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Explore Ethiopia Co. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed by{" "}
            <a href="#" className="text-white hover:underline">
              Yared Yemane
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
