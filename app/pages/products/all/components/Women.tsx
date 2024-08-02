'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Define the Product interface
interface Product {
  id: number;
  prodName: string;
  prodPrice: number;
  prodDesc: string;
  category: string;
  available: boolean;
  quantity: number;
}

const Women = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setIsError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/womens-api/products');
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
      <h1 className="text-start text-xl font-bold">All Women's</h1>
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
                {products.length > 0 ? (
         products.map((product) => {
          console.log(product.id, product);
          return (
            <SwiperSlide key={product.id} className='text-start p-2 m-2 mb-10 w-max h-max rounded-md bg-slate-500'>
              <h3 className='font-semibold text-lg m-2 p-2'>{product.prodName}</h3>
              <p className='font-medium text-sm p-2 m-2'>Description : {product.prodDesc}</p>
              <p className='font-medium text-sm p-2 m-2'>Price: Ksh {product.prodPrice}</p>
              <Link className='font-bold p-2 m-2' href={`/product/${product.id}`}>See More &rarr;</Link>
            </SwiperSlide>
          );
        })
        ) : (
          <p>No products available</p>
         
        )}
       </Swiper>
    
    </div>
  );
}

export default Women;
