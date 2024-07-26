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
      className="bg-slate-200 w-full top-0 fixed z-50 max-h-24"
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Small screen Navbar */}
      <div className="lg:hidden block">
        <SmNavbar />
      </div>

      {/* Large screen Navbar */}
      <div className="container mx-auto p-4 flex items-center justify-between hidden lg:flex">
        <div className='flex items-center space-x-4'>
          <Link href="/">
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} className='rounded-full' />
          </Link>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link href="/">
                <a className="block py-2 px-4 text-gray-700 hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('shopAll')}
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Shop All</span>
              {hoveredItem === 'shopAll' && (
                <div
                  className='absolute flex flex-row gap-8 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
                >
                  {/* Featured */}
                  <div className='flex flex-col p-2 space-y-2'>
                    <h1 className='text-gray-500 font-semibold'>Featured</h1>
                    <Link href=""><a className='hover:underline decoration-slate-500'>New Arrivals</a></Link>
                    <Link href=""><a className='hover:underline decoration-slate-500'>Sale</a></Link>
                    <Link href=""><a className='hover:underline decoration-slate-500'>Bags</a></Link>
                    <Link href="/products/gift-cards"><a className='hover:underline decoration-slate-500'>Gift Cards</a></Link>
                  </div>
                  {/* Other Categories */}
                  {/* Repeat similar blocks for other categories */}
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
                  <Link href=""><a className='hover:underline decoration-slate-500'>All Men</a></Link>
                  <Link href=""><a className='hover:underline decoration-slate-500'>Swimwear</a></Link>
                  <Link href=""><a className='hover:underline decoration-slate-500'>Accessories</a></Link>
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
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Women</span>
              {hoveredItem === 'women' && (
                <div
                  className='absolute flex flex-col gap-4 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
                >
                  <Link href=""><a className='hover:underline decoration-slate-500'>All Women</a></Link>
                  {/* Sub-menu for One Pieces */}
                  <div className='relative' onMouseEnter={() => setSubHoveredItem('onePiece')}>
                    <Link href=""><a className='hover:underline decoration-slate-500'>One Pieces</a></Link>
                    {subHoveredItem === 'onePiece' && (
                      <div className="absolute left-full top-0 flex flex-col gap-4 p-4 mt-0 ml-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu">
                        <Link href=""><a className='hover:underline decoration-slate-500'>Monokini</a></Link>
                        <Link href=""><a className='hover:underline decoration-slate-500'>Bikini</a></Link>
                      </div>
                    )}
                  </div>
                  {/* Repeat for other categories */}
                </div>
              )}
            </li>
            <li className="nav-item relative">
              <Link href='/fit-guide'>
                <a className='block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer'>Size Guide</a>
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
