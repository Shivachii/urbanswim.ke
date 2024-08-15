import React from 'react';
import Slider from './components/ui/Slider/Slider';
import Video from './components/Landing/Video';
import Collection from './components/Landing/Collection' 
import NewArrivals from './components/Landing/NewArrivals'

const Home = () => {
  return (
    <main className="min-h-screen w-full">
      {/* VIDEO COMPONENT CONTAINER */}
        <div className="">
          <Video/>
        </div>

      <div className="text-center p-4 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
          OUR SUMMER 2024 COLLECTION
        </h1>
        <p className="text-md sm:text-lg font-medium">
          Taking a dip this summer? Visit our shop and let us make your summer worthwhile.
        </p>
        <button type="button" className="m-4 bg-black text-white hover:opacity-80 rounded-3xl w-[150px] sm:w-[200px] h-[40px]">
          Shop Now
        </button>
      </div>

      {/* COLLECTIONS CONTAINER */}
       <div className="">
        <Collection/>
       </div>

        {/* NEW ARRIVALS CONTAINER */}
      <div className="">
          <NewArrivals/>
      </div>

      <div className="p-4 sm:p-10 mt-4 sm:mt-10 ">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          SHOP BY CUSTOMER FAVOURITES
        </h1>
        <Slider />
      </div>
    </main>
  );
};

export default Home;
