'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faCartShopping, faChild, faFemale, faSearch, faUser, faMale, faHeart, faPhone, faPlus, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import ModalLogin from '@/app/components/ui/Modal';
import ModalReg from '@/app/components/ui/ModalRegister';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <div className='relative w-auto max-w-screen-xl '>
      {/* Container for menu for larger screens */}
      <div className='relative flex flex-row p-4 bg-slate-100 hidden lg:flex'>
        <div className='absolute top-0 right-0 m-2 hidden lg:block'>
          <ul className='flex flex-row space-x-4 text-lg'>
            <li>
              <Link
                href="https://wa.me/message/WFDBTOE677NNL1"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className='mr-2 mt-2' />
              </Link>
            </li>
            <li>
              <div className='border border-black h-6 mt-2'> </div>
            </li>
            <li>
              <Link
                href="https://maps.app.goo.gl/yphhVRM7J756SQrS7"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLocationDot} className='mr-2 mt-2' />
              </Link>
            </li>
            <li>
              <div className='border border-black h-6 mt-2'> </div>
            </li>
            <li>
              <Link href="tel:+254712785836" target="_blank" rel="noopener noreferrer">
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
        <div className='flex-grow flex justify-center space-x-5 p-5 m-5 mt-10 hidden lg:block'>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>New Arrivals</Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>Men</Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>Women</Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>Children</Link>
          <Link href='' className='hover:underline decoration-2 underline-offset-8 decoration-slate-500'>Sale</Link>
        </div>
        <div className='space-x-5 p-5 m-5 mt-10 hidden lg:block'>
          <input type="search" name="" id="" placeholder='Type to search' className='rounded-3xl p-2 outline-none focus:border-gray-800 focus:border' />
          <FontAwesomeIcon icon={faCartShopping} className='mt-3 text-xl' />
          <FontAwesomeIcon icon={faHeart} className='mt-3 text-xl' />
        </div>
      </div>

      {/* Container for small screen nav */}
      <div className='relative flex flex-row p-10  bg-slate-100 lg:hidden'>
        <div>
          <Image
            src='/logo.jpg'
            width='50'
            height='50'
            alt='Logo'
            className='rounded-full'
          />
        </div>
        <div className='absolute right-0 space-x-5 p-2'>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon
            icon={faBars}
            className='cursor-pointer'
            onClick={toggleMenu}
          />
          {/* Menu for smaller screens */}
          <div className={`p-4 absolute w-64 ${isMenuOpen ? 'block' : 'hidden'} right-6 z-50`}>
            <ul className='flex flex-col space-y-4 p-4 bg-slate-50 rounded-lg'>
              <li className='my-2 hover:font-semibold'>
                <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faMale} className='w-[20px] h-[20px]' /> Men
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faFemale} className='w-[20px] h-[20px]' /> Women
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faChild} className='w-[20px] h-[20px]' /> Children
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faPlus} className='w-[20px] h-[20px]' /> New Arrivals
                </Link>
              </li>
              <ul>
                <div className='my-4'>
                  <p className='text-sm text-slate-600 font-semibold p-2 m-2'>
                    Become a member at UrbaneSwim and enjoy exclusive offers
                    and discounts
                  </p>
                  <div className='flex flex-row space-x-4 text-sm'>
                    <ModalReg />
                    <ModalLogin />
                  </div>
                </div>
                <li className='my-4 hover:font-semibold'>
                  <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                    <FontAwesomeIcon icon={faCartShopping} /> Cart
                  </Link>
                </li>
                <li className='my-2 hover:font-semibold'>
                  <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                    <FontAwesomeIcon icon={faBagShopping} /> Orders
                  </Link>
                </li>
                <li className='my-2 hover:font-semibold'>
                  <Link href='' className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                    <FontAwesomeIcon icon={faLocationDot} /> Our Store
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
