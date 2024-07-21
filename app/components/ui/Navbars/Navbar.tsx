'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faBars,
  faCartShopping,
  faChild,
  faFemale,
  faSearch,
  faUser,
  faMale,
  faHeart,
  faPhone,
  faPlus,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import ModalLogin from '@/app/components/ui/Modal';
import ModalReg from '@/app/components/ui/ModalRegister';
import { useRouter } from 'next/navigation';
import CartModal from '../CartModal';
import SmNavbar from './SmNavbar';

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [subHoveredItem, setSubHoveredItem] = useState<string | null>(null);
  const [isCartOpen, setisCartOpen] = useState(false);

  const handleClick = () => {
    window.location.href = '/';
  };

  // Search Handle
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  // Handle click outside to close dropdown
   useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest('.dropdown-menu')) {
        setHoveredItem(null);
        setSubHoveredItem(null);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []); 

  const handleCartOpen = () => {
    setisCartOpen((prev) => !prev);
  };

  return (
    <div className='relative w-auto max-w-screen-xl'>
      {/* Container for menu for larger screens */}
      <div className='relative flex-row p-4 bg-slate-100 hidden lg:flex'>
        <div className='absolute top-0 right-0 m-2 hidden lg:block'>
          <ul className='flex flex-row space-x-4 text-lg'>
            <li>
              <Link
                href='https://wa.me/message/WFDBTOE677NNL1'
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faWhatsapp} className='mr-2 mt-2' />
              </Link>
            </li>
            <li>
              <div className='border border-black h-6 mt-2'> </div>
            </li>
            <li>
              <Link
                href='https://maps.app.goo.gl/yphhVRM7J756SQrS7'
                target='_blank'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLocationDot} className='mr-2 mt-2' />
              </Link>
            </li>
            <li>
              <div className='border border-black h-6 mt-2'> </div>
            </li>
            <li>
              <Link href='tel:+254712785836' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faPhone} className='mr-2 mt-2' />
              </Link>
            </li>
            <li>
              <ModalReg />
            </li>
            <li>
              <ModalLogin />
            </li>
          </ul>
        </div>
        <div className='m-5 hidden lg:block'>
          <Image
            src='/logo.jpg'
            alt=''
            width='100'
            height='100'
            className='rounded-full hover:cursor-pointer'
            onClick={handleClick}
          />
        </div>
        <div className='relative text-center flex-grow flex justify-center space-x-5 p-5 m-2 mt-10 lg:block'>
          <Link
            href=''
            className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'
            onMouseEnter={() => setHoveredItem('dropdown')}>
            Shop All
            {hoveredItem === 'dropdown' && (
              <div
                className='absolute flex flex-row gap-8 p-4 mt-4 w-max bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
                onMouseEnter={() => setHoveredItem('dropdown')}
                onMouseLeave={() => setHoveredItem(null)}>
                {/* Featured */}
                <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start'>
                  <h1 className='text-gray-500 font-semibold'>Featured</h1>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    New Arrivals
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Sale
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Bags
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Gift Cards
                  </Link>
                </div>
                {/* By Category */}
                <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start'>
                  <h1 className='text-gray-500 font-semibold'>By Category</h1>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Swim Tops
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Swim Bottoms
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Beach Tops
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Beach Bottoms
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Cover Ups
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Accessories
                  </Link>
                </div>
                {/* By Size */}
                <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start'>
                  <h1 className='text-gray-500 font-semibold'>By Size</h1>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Small
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Medium
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Large
                  </Link>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                    Plus Size
                  </Link>
                </div>
                {/* Mens Menu */}
                <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start'>
                  <h1 className='text-gray-500 font-semibold'>Something for Everyone</h1>
                  <Link
                    href=''
                    className='hover:translate-x-2 duration-500'
                    onMouseEnter={() => setSubHoveredItem('menDropdown')}
                    onMouseLeave={() => setSubHoveredItem(null)}>
                    Men
                    {subHoveredItem === 'menDropdown' && (
                      <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start animate-appearance-in'>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Swimwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Beachwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Accessories
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Sizes
                        </Link>
                      </div>
                    )}
                  </Link>
                  <Link
                    href=''
                    onMouseEnter={() => setSubHoveredItem('womenDropdown')}
                    onMouseLeave={() => setSubHoveredItem(null)}>
                    Women
                    {subHoveredItem === 'womenDropdown' && (
                      <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start animate-appearance-in'>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Swimwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Beachwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Accessories
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Sizes
                        </Link>
                      </div>
                    )}
                  </Link>
                  <Link
                    href=''
                    onMouseEnter={() => setSubHoveredItem('kidsDropdown')}
                    onMouseLeave={() => setSubHoveredItem(null)}>
                    Kids
                    {subHoveredItem === 'kidsDropdown' && (
                      <div className='flex flex-col p-2 m-2 space-y-5 justify-start text-start animate-appearance-in'>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Swimwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Beachwear
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Accessories
                        </Link>
                        <Link
                          href=''
                          className='hover:translate-x-2 duration-500 hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
                          Sizes
                        </Link>
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            )}
          </Link>
          <Link
            href=''
            className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'
            onMouseEnter={() => setHoveredItem(null)}>
            New Arrivals
          </Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
            Sale
          </Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>
            Fit Guide
          </Link>
        </div>
        <div className='flex-row space-x-5 p-5 mt-8 hidden lg:block'>
          <form className='flex justify-between p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input
              type='search'
              name='name'
              id=''
              placeholder='Type to search'
              className='rounded-3xl p-2 flex-1 outline-none focus:border-gray-800 focus:border'
            />
            <button>
              <FontAwesomeIcon icon={faSearch} className='cursor pointer mx-2' />
            </button>
          </form>
          <div className='relative flex flex-row space-x-6 justify-end'>
            <div className='relative'>
              <FontAwesomeIcon icon={faCartShopping} className='mt-3 text-xl cursor-pointer' onClick={handleCartOpen} />
              <div className='absolute -top-1 -right-4 w-5 h-5 bg-pink-600 rounded-full items-center justify-center text-center text-white text-sm'>
                2
              </div>
              {isCartOpen && <CartModal />}
            </div>
            <div className='relative'>
              <FontAwesomeIcon icon={faHeart} className='mt-3 text-xl' />
              <div className='absolute -top-1 -right-4 w-5 h-5 bg-pink-600 rounded-full items-center justify-center text-center text-white text-sm'>
                2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden'>
        <SmNavbar />
      </div>
    </div>
  );
};
