'use client'
import React from 'react'


const NewArrivals = () => {
  return (
    <div className="w-full">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">
            NEW THIS WEEK
          </h1>
          <button type="button" className="m-4 bg-black text-white hover:opacity-80 rounded-3xl w-[150px] sm:w-[200px] h-[40px]">
            Shop New Arrivals
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 pb-10 px-4 sm:px-10">
          <div className="relative bg-[url('/kimono.jpg')] bg-cover h-64 sm:h-96">
            <div className="absolute bottom-0 text-white p-4 sm:p-8">
              <p className="m-2 font-semibold text-lg sm:text-xl">
                Cover Ups
              </p>
              <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">
                Shop
              </button>
            </div>
          </div>
          <div className="relative bg-[url('/bag.jpg')] bg-cover h-64 sm:h-96">
            <div className="absolute bottom-0 text-white p-4 sm:p-8">
              <p className="m-2 font-semibold text-lg sm:text-xl">
                Summer Bags
              </p>
              <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[70px] sm:w-[80px] h-[30px] sm:h-[40px]">
                Shop
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
export default NewArrivals;
