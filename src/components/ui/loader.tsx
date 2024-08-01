import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-4 h-4 rounded-full animate-pulse bg-[#FE0FE2]"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-[#FE0FE2]"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-[#FE0FE2]"></div>
        </div>
        <p className="text-gray-600 ml-3">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
