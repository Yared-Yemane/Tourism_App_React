import React from "react";

const Soon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Coming Soon</h1>
      <p className="text-xl text-gray-700 mb-6">
        We're working hard to bring this page to you. Stay tuned!
      </p>
      <div className="flex flex-col items-center">
        <p className="text-lg text-gray-500 mb-2">
          Join our mailing list to get updates:
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded border border-gray-300 mb-4"
        />
        <button className="bg-red-600 hover:bg-white text-white py-2 px-4 rounded hover:text-black hover:border-black border-[1px] transition duration-300">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default Soon;
