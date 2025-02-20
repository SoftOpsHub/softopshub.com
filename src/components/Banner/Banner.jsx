import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-teal-500 overflow-hidden h-80 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-600 text-white opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-repeat opacity-30 animate-[moveWave_10s_linear_infinite]"></div>
      
      <div className="relative text-white text-center">
        <h1 className="text-3xl font-bold">Cloud & DevOps</h1>
        <div className="mt-2 flex items-center justify-center gap-4">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-semibold">aws</span>
            <span className="text-sm">partner network</span>
          </div>
          <div className="flex items-center space-x-1">
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes moveWave {
          0% { background-position: 0 0; }
          100% { background-position: 100px 50px; }
        }
      `}</style>
    </div>
  );
};

export default Banner;
