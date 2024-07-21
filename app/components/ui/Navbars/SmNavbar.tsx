import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faBars, faMale, faFemale, faChild, faPlus, faBagShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import CartModal from '../CartModal';
import ModalReg from '../ModalRegister';
import ModalLogin from '../Modal';

const SmNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false)
    setIsMenuOpen(false)

  };

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    setIsSearchOpen(false)
    setIsMenuOpen(false)
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false)
    setIsCartOpen(false)
  };

  const handleClick = () => {
    router.push('/');
  };


  const handleSearch = (e :  React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as String

      if(name){
        router.push('/list?name=${name}')
      }
}

  return (
    <div className='relative flex flex-row p-10 max-w-screen bg-slate-100 lg:hidden'>
      <div>
        <Image
          src='/logo.jpg'
          width='50'
          height='50'
          alt='Logo'
          className='rounded-full hover:cursor-pointer'
          onClick={handleClick}
        />
      </div>
      <div className='absolute flex flex-row right-0 space-x-5 p-2'>
        <div>
          <FontAwesomeIcon icon={faSearch} className='cursor-pointer' onClick={handleSearchOpen} />
          {
            isSearchOpen && (
              <div className='absolute right-8 z-50 animate-appearance-in'>
                <form className='flex justify-between p-2 rounded-md flex-1' onSubmit={handleSearch}>
                  <input type="search" name="name" placeholder='Type to search' className='rounded-3xl p-2 flex-1 outline-none focus:border-gray-800 focus:border' />
                  <button type="submit" className='m-2 text-slate-400 hover:font-medium'>Search</button>
                </form>
              </div>
            )
          }
        </div>
        <div className='relative'>
          <FontAwesomeIcon icon={faCartShopping} className='cursor-pointer' onClick={handleCartOpen} />
          {
            isCartOpen && (
              <CartModal />
            )
          }
          <div className='absolute -top-3 -right-4 w-5 h-5 bg-pink-600 rounded-full items-center justify-center text-center text-white text-sm'>
            2
          </div>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className='cursor-pointer'
          onClick={toggleMenu}
        />
        {/* Menu for smaller screens */}
        <div className={`p-4 absolute w-64 ${isMenuOpen ? 'block' : 'hidden'} mt-8 right-6 z-50 animate-appearance-in`}>
          <ul className='flex flex-col space-y-4 p-4 bg-slate-50 rounded-lg'>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faMale} className='w-[20px] h-[20px]' /> Men
                </p>
              </Link>
            </li>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faFemale} className='w-[20px] h-[20px]' /> Women
                </p>
              </Link>
            </li>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faChild} className='w-[20px] h-[20px]' /> Children
                </p>
              </Link>
            </li>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faPlus} className='w-[20px] h-[20px]' /> New Arrivals
                </p>
              </Link>
            </li>
            <div className='my-4'>
              <p className='text-sm text-slate-600 font-semibold p-2 m-2'>
                Become a member at UrbaneSwim and enjoy exclusive offers and discounts
              </p>
              <div className='flex flex-row space-x-4 text-sm'>
                <ModalReg />
                <ModalLogin />
              </div>
            </div>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faBagShopping} /> Orders
                </p>
              </Link>
            </li>
            <li className='my-2 hover:font-semibold'>
              <Link href=''>
                <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  <FontAwesomeIcon icon={faLocationDot} /> Our Store
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SmNavbar;
