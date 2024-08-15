'use cleint'
import React from 'react'

const Video = () => {
  return (
    <div className="w-full">
    {/* Container for video */}
    <div className="relative w-96 md:w-full h-64 sm:h-96">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-xl sm:text-3xl font-bold z-auto">
          URBANE SWIM KENYA
        </p>
      </div>
    </div>
  </div>
  );
};
export default Video;
