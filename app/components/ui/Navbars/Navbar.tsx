'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SmNavbar from './SmNavbar';

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [subHoveredItem, setSubHoveredItem] = useState<string | null>(null);
  const router = useRouter();

  const handleLinkClick = () => {
    setHoveredItem(null);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <nav
      className="bg-slate-200 w-full  z-50 max-h-24"
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Small screen Navbar */}
      <div className="lg:hidden block">
        <SmNavbar />
      </div>

      {/* Large screen Navbar */}
      <div className="container mx-auto p-4  items-center justify-between hidden lg:flex">
        <div className='relative flex items-center space-x-8'>
          <Link href="/" legacyBehavior>
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} className='rounded-full' />
          </Link>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link href="/" className="block py-2 px-4 text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('shopAll')}
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Shop All</span>
              {hoveredItem === 'shopAll' && (
                <div
                  className='absolute w-max -left-20 flex flex-row gap-8 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
                >
                  {/* Featured */}
                  <div className='flex flex-col p-2 space-y-2'>
                    <h1 className='text-gray-500 font-semibold my-2'>Featured</h1>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>New Arrivals</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Sale</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bags</Link>
                    <Link
                      href="/products/gift-cards"
                      className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Gift Cards</Link>
                  </div>
                  {/* Category */}
                  <div className='flex flex-col p-2 space-y-2'>
                    <h1 className='text-gray-500 font-semibold my-2'>By Category</h1>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swim Tops</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swim Bottoms</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swim One Pieces</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beachwear Tops</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beachwear Bottoms</Link>
                  </div>
                  {/* Size */}
                  <div className='flex flex-col p-2 space-y-2'>
                    <h1 className='text-gray-500 font-semibold my-2'>By Size</h1>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>AA - B</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>C - DDD</Link>
                    <Link href="" className='hover:translate-x-2 duration-500hover:underline decoration-slate-500'>E - G</Link>
                    <Link href="/fit-guide" className='font-medium hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Our Size Guide &rarr;</Link>
                    
                  </div>
                  {/* Something Special */}
                  <div className='flex flex-col p-2 space-y-2'>
                    <h1 className='text-gray-500 font-semibold my-2'>Something Special</h1>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Valentine's Special</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>One of One Pieces</Link>                    
                  </div>
                </div>
              )}
            </li>
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('men')}
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Men</span>
              {hoveredItem === 'men' && (
                <div className='absolute flex flex-col gap-4 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>All Men</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swimwear</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Accessories</Link>
                </div>
              )}
            </li>
            <li
              className="nav-item relative"
              onMouseEnter={() => {
                setHoveredItem('women');
                setSubHoveredItem(null); // Reset sub-hovered item
              }}
            >
              <span className="block py-2 px-4 w-max text-gray-700 hover:text-gray-900 cursor-pointer">Women</span>
              {hoveredItem === 'women' && (
                <div
                  className='absolute flex flex-col w-max gap-4 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
                >
                  <Link href="" className='hover:underline decoration-slate-500'>All Women</Link>
                  {/* Sub-menu for One Pieces */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('onePiece')}>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>One Pieces</Link>
                    {subHoveredItem === 'onePiece' && (
                      <div className="absolute left-full w-max top-0 flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Monokini</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                      </div>
                    )}
                  </div>
                  {/* Sub-menu for Two Pieces */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('twoPiece')}>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Two Pieces</Link>
                    {subHoveredItem === 'twoPiece' && (
                      <div className="absolute left-full top-0  w-max flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Monokini</Link>

                      </div>
                    )}
                  </div>
                  {/* Sub-menu for Three Pieces */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('threePiece')}>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Three Pieces</Link>
                    {subHoveredItem === 'threePiece' && (
                      <div className="absolute left-full top-0 w-max flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Tankini</Link>
                      </div>
                    )}
                  </div>
                  {/* Sub-menu for Four Pieces */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('fourPiece')}>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Four Pieces</Link>
                    {subHoveredItem === 'fourPiece' && (
                      <div className="absolute left-full top-0 w-max flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                      </div>
                    )}
                  </div>
                  {/* Sub-menu for Cover-ups */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('coverUps')}>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Cover Ups & Shorts</Link>
                    {subHoveredItem === 'coverUps' && (
                      <div className="absolute left-full w-max top-0 flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Cover Ups</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beach Pants</Link>
                        <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beach Shorts</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item relative">
              <Link
                href='/fit-guide'
                className='block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer'>
                Size Guide
              </Link>
            </li>
          </ul>
        </div>
        <form className="flex items-center" onSubmit={handleSearch}>
          <input
            className="form-input px-4 py-2 rounded-lg border border-gray-300"
            type="search"
            name="name"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg ml-2" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
