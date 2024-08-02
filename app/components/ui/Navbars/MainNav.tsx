'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faBasketShopping,  faCartShopping, faChild, faFemale, faHeart, faLocationDot, faMale, faPhone, faPlus, faSearch, faShoppingBasket, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ModalLogin from './Modals/Modal';
import ModalReg from './Modals/ModalRegister';
import CartModal from './Modals/CartModal';
import SmNavbar from './SmNavbar';


export const MainNav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [subHoveredItem, setSubHoveredItem] = useState<string | null>(null);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
  
    const handleCartOpen = () => {
      setIsCartOpen(!isCartOpen);
      setIsSearchOpen(false)
      
    };
    const handleSearchOpen = () => {
      setIsSearchOpen(!isSearchOpen);
      setIsCartOpen(false)
      
  
    };
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsSearchOpen(false)
      setIsCartOpen(false)
    };
    const handleClose = () => {
      // Close the menu
      setIsMenuOpen(false);
    };
  
    const router = useRouter();
  
    const handleLinkClick = () => {
      setHoveredItem(null);
    };
    const handleClick = () => {
      router.push('/');
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
    <nav className="relative  w-full p-6">
        
        {/* Modals section */}
      <div className="absolute top-0 right-0 flex flex-row space-x-4 bg-pink-300 p-2 ">
            <div className="flex flex-row space-x-4 m-2 ">
              <Link href=''><FontAwesomeIcon icon={faPhone}/></Link>
              <div className="h-6 w-0.5 bg-black"></div>
              <Link href=''><FontAwesomeIcon icon={faWhatsapp}/></Link>
              <div className="h-6 w-0.5 bg-black"></div>
              <Link href='/contact'>Help</Link>
              
            </div>
        <ModalLogin/>
        <ModalReg/>
      </div>
       
        {/* Main Nav content container */}
       <div className="relative container flex flex-row  justify-between mt-8 "   >
        {/* Side menu container */}
        <div className="lg:hidden flex  p-2 m-2 mt-8">
        <FontAwesomeIcon
          icon={faBars}
          className='cursor-pointer'
          onClick={toggleMenu}
        />
        {/* Menu for smaller screens */}
                  <div
            className={`p-4 absolute max-w-[500px] ${isMenuOpen ? 'block' : 'hidden'} mt-6 bg-slate-100 rounded-lg left-0 z-50 animate-appearance-in h-max overflow-auto max-h-96`} 
          >
            {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-gray-600 hover:text-gray-900 p-2 m-2"
        >
          <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]' />
        </button>
            <ul className='flex flex-col space-y-4 p-4 text-sm  mt-4'>
            <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Shop All
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     New Arrivals
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                   Sale
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/products/gift-card' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Gift Cards
                  </p>
                </Link>
              </li>
              </ul>
              {/* Category menu */}
              <ul className='flex flex-col space-y-4 p-4 text-sm'>
              <li className="my-2 font-semibold">Something For Everyone</li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Men
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                   Women
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Children
                  </p>
                </Link>
              </li>
              {/* Modal menu */}
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
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                    <FontAwesomeIcon icon={faLocationDot} /> Our Store
                  </p>
                </Link>
              </li>
            </ul>
            {/* Help meu */}
              <ul className="flex flex-col space-y-4 p-4 text-sm">
                <li className="font-semibold ">Need Help?</li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/contact' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Contact Us
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/Faq' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                     Frequently Asked Questions
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/care-tips' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  Care Guide
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/fit-guide' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-purple-800'>
                  Size Guide
                  </p>
                </Link>
              </li>
              </ul>
          </div>


        </div>
             
        {/* Links container */}
        <div className="lg:flex hidden flex-row justify-center items-center space-x-4  bg-blue-300" >
        <ul className="flex bg-red-300 ">
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('shopAll')}
             
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer" >Shop All</span>
              {hoveredItem === 'shopAll' && (
                <div
                onMouseLeave={() => setHoveredItem(null)}
                  className='absolute w-max -left-5 flex flex-row gap-8 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'
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
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Valentine&apos;s Special</Link>
                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>One of One Pieces</Link>                    
                  </div>
                </div>
              )}
            </li>
            {/* Men */}
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('men')}
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Men</span>
              {hoveredItem === 'men' && (
                <div  onMouseLeave={() => setHoveredItem(null)} className='absolute flex flex-col gap-4 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>All Men</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swimwear</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Accessories</Link>
                </div>
              )}
            </li>
            {/* women */}
            <li
              className="nav-item relative"
              onMouseEnter={() => {
                setHoveredItem('women');
                setSubHoveredItem(null); // Reset sub-hovered item
              }}
            >
              <span className="block py-2 px-4 w-max text-gray-700 hover:text-gray-900 cursor-pointer">Women</span>
              {hoveredItem === 'women' && (
                <div  onMouseLeave={() => setHoveredItem(null)}
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
            {/* Kids */}
            <li
              className="nav-item relative"
              onMouseEnter={() => setHoveredItem('kids')}
            >
              <span className="block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer">Children</span>
              {hoveredItem === 'kids' && (
                <div  onMouseLeave={() => setHoveredItem(null)}  className='absolute flex flex-col gap-4 p-4 mt-4 bg-white shadow-md rounded-md z-50 animate-appearance-in dropdown-menu'>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>All Children</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swimwear</Link>
                  <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Accessories</Link>
                </div>
              )}
            </li>
            {/* Size guide */}
            <li className="nav-item relative">
              <Link
               onMouseEnter={() => setHoveredItem(null)}
                href='/fit-guide'
                className='block py-2 px-4 text-gray-700 hover:text-gray-900 cursor-pointer'>
                Size Guide
              </Link>
            </li>
          </ul>
        </div>
          {/* Image container */}
       <div className="bg-[url('/logo.jpg')] bg-contain bg-no-repeat w-20 h-20 rounded-full  " onClick={handleClick}>  
        </div>
       
        {/* Form and Cart/Favourites container */}
        <div className="flex flex-row space-x-4 p-2 m-2 bg-yellow-300 justify-center items-center ">
        <form className="items-center lg:flex hidden" >
          <input
            className="form-input px-4 py-2 placeholder-slate-500  rounded-lg border border-gray-300"
            type="search"
            name="name"
            placeholder="Search"
            aria-label="Search"
          />
          <button id='' name=''  className="px-4 py-2 bg-black hover:opacity-85 text-white rounded-lg ml-2" type="submit">
            Search
          </button>
        </form>
        {/* Cart and Favourites */}
        <div className="flex flex-row text-lg space-x-4 p-2 m-2 ">
          {/* Sm Search */}
        <div className='lg:hidden'>
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
                  <div className="relative">
                  <Link href=''>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
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
             
            </div>
        </div>
        
        
       </div>
    </nav>
  )
}
