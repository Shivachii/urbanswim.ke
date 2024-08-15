'use client'
import React from 'react';

const Collection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 pb-10 px-4 sm:px-10">
      <div className="relative bg-[url('/kids.jpg')] bg-cover bg-center bg-no-repeat h-64 sm:h-96">
        <div className="absolute bottom-0 text-white p-4 sm:p-8">
          <p className="m-2 font-medium text-base">Going on holiday with the kids?</p>
          <p className="m-2 font-semibold text-lg sm:text-xl">All new children&apos;s beach essentials</p>
          <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">Shop</button>
        </div>
      </div>
      <div className="relative bg-[url('/swim.jpg')] bg-cover h-64 sm:h-96">
        <div className="absolute bottom-0 text-white p-4 sm:p-8">
          <p className="m-2 font-medium text-base">Look good Swim better</p>
          <p className="m-2 font-semibold text-lg sm:text-xl">2024 Swimwear Collection</p>
          <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">Shop</button>
        </div>
      </div>
      <div className="relative bg-[url('/hat.jpg')] bg-cover h-64 sm:h-96">
        <div className="absolute bottom-0 text-white p-4 sm:p-8">
          <p className="m-2 font-medium text-base">Feeling the sun?</p>
          <p className="m-2 font-semibold text-lg sm:text-xl">Hats, hats, hats</p>
          <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">Shop</button>
        </div>
      </div>
      <div className="relative bg-[url('/sunnies.jpg')] bg-cover h-64 sm:h-96">
        <div className="absolute bottom-0 text-white p-4 sm:p-8">
          <p className="m-2 font-medium text-base">All new facewear</p>
          <p className="m-2 font-semibold text-lg sm:text-xl">Sunnies for summer bunnies</p>
          <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
