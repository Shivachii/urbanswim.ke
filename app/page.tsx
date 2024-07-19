'use client'

import Slider from '@/app/components/ui/Slider'


export default function Home() {
  return (
    <main className="min-h-screen w-full ">
        <div className="w-full">
          {/* Container for video */}
          <div className="relative w-full h-64">
                <video className="w-full h-full object-cover" autoPlay loop muted>
                  <source src="/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-black text-xl font-bold z-50">
                      URBANE SWIM KENYA
                  </p>
                </div>
              </div>

        </div>
        <div className="text-center p-10 m-10">
          <h1 className="text-3xl font-bold">
                OUR SUMMER 2024 COLLECTION
          </h1>
          <p className="text-lg font-medium">
            Taking a dip this summer? Visit our shop and let us make 
            your summer worthwile
          </p>
          <button type="button" className="m-4  bg-black text-white hover:opacity-80 rounded-3xl w-[200px] h-[40px]">
          Shop Now
        </button>
        </div>
      <div className="grid grid-cols-2 w-full pt-15 pb-20 ">
      <div className="relative bg-[url('/kids.jpg')] bg-cover bg-center bg-no-repeat h-96 ">
        <div className='absolute bottom-0 text-white p-8 '>
        <p className="m-2 font-medium text-base">
         Going on holiday with the kids?
        </p>
        <p className="m-2 font-semibold text-xl">
         All new children&apos;s beach essentials
        </p>
        <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px]  ">
          Shop 
        </button>
        </div>
      </div>
      <div className="relative bg-[url('/swim.jpg')] bg-cover h-96 ">
        <div className='absolute bottom-0 text-white p-8 '>
        <p className="m-2 font-medium text-base">
          Look good Swim better
        </p>
        <p className="m-2 font-semibold text-xl">
        2024 Swimwear Collection
        </p>
        <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px] ">
          Shop 
        </button>
        </div>
      </div>
      <div className="relative bg-[url('/hat.jpg')] bg-cover h-96">
        <div className='absolute bottom-0 text-white p-8 '>
        <p className="m-2 font-medium text-base">
          Feeling the sun?
        </p>
        <p className="m-2 font-semibold text-xl">
          Hats, hats, hats
        </p>
        <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px]">
          Shop
        </button>
        </div>
      </div>
      <div className="relative bg-[url('/sunnies.jpg')] bg-cover h-96">
        <div className='absolute bottom-0 text-white p-8 '>
        <p className="m-2 font-medium text-base">
         All new facewear
        </p>
        <p className="m-2 font-semibold text-xl">
        Sunnies for summer bunnies  
        </p>
        <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px]">
          Shop 
        </button>
        </div>
      </div>
     
    </div>
    <div className=" w-full">
      <div className="text-center">
      <h1 className="text-4xl font-bold text-center">
        NEW THIS WEEK
      </h1>
      <button type="button" className="m-4  bg-black text-white hover:opacity-80 rounded-3xl w-[200px] h-[40px]">
          Shop New Arrivals
        </button>
      </div>
     
        <div className="grid grid-cols-2">
            <div className="relative bg-[url('/kimono.jpg')] bg-cover h-[500px] ">
                    <div className='absolute bottom-0 text-white p-8 '>
                  
                    <p className="m-2 font-semibold text-xl">
                      Cover Ups
                    </p>
                    <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px]  ">
                      Shop 
                    </button>
                    </div>
        </div>
        <div className="relative bg-[url('/bag.jpg')] bg-cover h-[500px] ">
        <div className='absolute bottom-0 text-white p-8 '>
       
        <p className="m-2 font-semibold text-xl">
            Summer Bags
        </p>
        <button type="button" className="m-2 bg-white text-black hover:bg-gray-300 rounded-3xl w-[80px] h-[40px]  ">
          Shop 
        </button>
        </div>
      </div>
      </div>
    </div>
    <div className="p-10 mt-10">
      <h1 className="text-4xl font-bold text-center" >
        SHOP BY CUSTOMER FAVOURITES
      </h1>
      <Slider />
           
      
    </div>
   
    </main>
  );
}
