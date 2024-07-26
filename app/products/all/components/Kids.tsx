'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';

// Define the Product interface
interface Product {
  Id: number;
  prodName: string;
  prodPrice: number;
  prodDesc: string;
  category: string;
  available: boolean;
  quantity: number;
}

const Kids = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/kids-api/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <h2 className='text-center font-bold text-3xl'>COULD NOT FIND PRODUCTS</h2>
    );
  }

  return (
    <div className=' '>
      <h1 className="text-xl font-bold">All Kid's</h1>
      <div className='flex flex-row'>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.Id} className="w-96 h-80 rounded-md p-2 m-2 hover:-translate-y-2 duration-500 bg-slate-500">
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
    <h3>{product.prodName}</h3>
            <p>{product.prodDesc}</p>
            <p>Price: Ksh {product.prodPrice}</p>
            <Link href={'/${product.id}'} > See More</Link>
   </SwiperSlide>
               </Swiper>
            
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
      </div>
    
    </div>
  );
}

export default Kids;
