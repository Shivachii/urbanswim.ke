import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper w-full h-full p-10 m-10"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/shorts.jpg" alt="Mens Beach Shorts" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Mens Beach Shorts</p>
      </SwiperSlide>
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/african.jpg" alt="Kimono" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Kimono</p>
      </SwiperSlide>
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/coverup.jpg" alt="Monokini" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Monokini</p>
      </SwiperSlide>
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/store.jpg" alt="Bikinis" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Bikinis</p>
      </SwiperSlide>
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/sunglasses.jpg" alt="Sunglasses" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Sunglasses</p>
      </SwiperSlide>
      <SwiperSlide className="flex relative justify-center items-center bg-slate-50 h-32 mb-10 shadow-xl hover:cursor-pointer">
        <img src="/woven.jpg" alt="Woven Beach Bags" className="object-cover w-full h-96" />
        <p className='absolute inset-x-0 bottom-0 bg-black bg-opacity-20 h-6 text-white text-center font-medium text-lg'>Woven Beach Bags</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
