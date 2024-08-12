"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import './Navbarstyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBars, faCartShopping, faChevronDown, faHeart, faSearch, faTimes, faToggleOn, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'
import CartModal from './Modals/CartModal'
import ModalLogin from './Modals/Modal';
import ModalReg from './Modals/ModalRegister';



const Navbar = () => {
    const router = useRouter()
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isAboutOpen, setisAboutOpen] = useState(false);
    const [isGetInvolved, setisGetInvolved] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Handle Cart And Search Opening and closing
    const handleCartOpen = () => {
      setIsCartOpen(!isCartOpen);
      setIsSearchOpen(false)
      
    };
    const handleSearchOpen = () => {
      setIsSearchOpen(!isSearchOpen);
      setIsCartOpen(false)
      
  
    };

    // Handle swarch params
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
  
      if (name) {
        router.push(`/list?name=${name}`);
      }
    };

    // Handle menu toggle
    const menuToggle =() =>{
      setisMenuOpen(!isMenuOpen);
    };
    const handleClose = () => {
      // Close the menu
      setisMenuOpen(false);
    };
   
    // Handle About dropdown
    const handleAbout =() =>{
      setisAboutOpen(!isAboutOpen)
      setisGetInvolved(false)
    };
    const handleGetInvolved =() =>{
      setisGetInvolved(!isGetInvolved)
      setisAboutOpen(false)
    }
   
  return (
    <nav className="relative flex w-screen md:w-full p-4 max-h-80 bg-gradient-to-r from-slate-100 to-slate-200">
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
            {/* CONTAINER FOR LINKS and LOGO */}
            <div className="hidden md:flex flex-row items-center justify-between w-full ">
                {/* LOGO CONTAINER */}
                <div className="bg-[url('/logo.jpg')] bg-center bg-cover h-[80px] w-[80px] rounded-full cursor-pointer" onClick={() => router.push('/')}></div>
                {/* MAIN LINKS */}
                <div className="flex-1 flex justify-center px-4">
                    <div className="navbar">
                        <Link href="/">Home</Link>
                        {/* Shop All dropdown */}
                        <div className="dropdown">
                          <button className="dropbtn">Shop All
                          </button>
                              <div className="dropdown-content p-4 z-50">
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
                                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>E - G</Link>
                                    <Link href="/fit-guide" className='font-medium hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Our Size Guide &rarr;</Link>
                                    
                                  </div>
                                  {/* Something Special */}
                                  <div className='flex flex-col p-2 space-y-2'>
                                    <h1 className='text-gray-500 font-semibold my-2'>Something Special</h1>
                                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Valentine&apos;s Special</Link>
                                    <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>One of One Pieces</Link>                    
                                  </div>   
                              </div>
                          </div> 
                          {/* Mens Dropdown */}
                          <div className="dropdown">
                            <button className="dropbtn">Men</button>
                            <div className="dropdown-content-other z-50 ">
                            <Link href=""  className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>All Mens</Link>
                            <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swimwear</Link>
                            <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Accessories</Link>
                            </div>
                          </div>
                          {/* Womens Dropdown */}
                          <div className="dropdown">
                              <button className="dropbtn">Women</button>
                              <div className="dropdown-content-other z-50">
                                  <a href="#">All Women</a>
                                  <div className="subdropdown">
                                      <a href="#" className="subdroplink">One Pieces</a>
                                      <div className="subdropdown-content">
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Monokini</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                                      </div>
                                  </div>
                                  <div className="subdropdown">
                                      <a href="#" className="subdroplink">Two Pieces</a>
                                      <div className="subdropdown-content">
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Monokini</Link>
                                      </div>
                                  </div>
                                  <div className="subdropdown">
                                      <a href="#" className="subdroplink">Three Pieces</a>
                                      <div className="subdropdown-content">
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Bikini</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Tankini</Link>
                                      </div>
                                  </div>
                                  <div className="subdropdown">
                                      <a href="#" className="subdroplink">Four Pieces</a>
                                      <div className="subdropdown-content">
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Burkini</Link>
                                      </div>
                                  </div>
                                  <div className="subdropdown">
                                      <a href="#" className="subdroplink">Cover Ups & Shorts</a>
                                      <div className="subdropdown-content">
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Cover Ups</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beach Pants</Link>
                                      <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Beach Shorts</Link>
                                      </div>
                                  </div>
                              </div>
                           </div>

                          {/* Kids Dropdown */}
                          <div className="dropdown">
                            <button className="dropbtn">Children</button>
                            <div className="dropdown-content-other z-50 ">
                            <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>All Children</Link>
                            <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Swimwear</Link>
                            <Link href="" className='hover:translate-x-2 duration-500 hover:underline decoration-slate-500'>Accessories</Link>
                            </div>
                          </div>
                      
                       

                    </div>
                </div>
                
                {/* DONATE BUTTON */}
                <div className="flex">
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
                </div>
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
            
            {/* CONTAINER FOR SMALL SCREEN NAV */}
              <div className="relative flex sm:flex-row md:hidden  items-center justify-between w-full">
                  {/* Image container */}
                <div className="bg-[url('/child-friends.jpg')] bg-center bg-cover h-[60px] w-[60px] rounded-full cursor-pointer" onClick={() => router.push('/')}></div>
                    {/* Menu toggler */}
                      <button
                        className='relative'
                        onClick={menuToggle}
                      >
                      <FontAwesomeIcon icon={faBars}  className='relative '/>
                        </button>
                    {/* Side menu */}
                    <div
                     className={`p-4 absolute max-w-lg ${isMenuOpen ? 'block' : 'hidden'} mt-16 bg-slate-100 rounded-lg top-5 right-0 z-50 animate-appearance-in h-max overflow-auto max-h-96`} 
                     >
                          {/* Close button */}
                      <button
                        onClick={handleClose}
                        className="absolute top-0 right-0 text-gray-600 hover:text-gray-900 p-2 m-2"
                      >
                        <FontAwesomeIcon icon={faTimes} className='w-[20px] h-[20px]' />
                      </button>
                      <div className="relative flex flex-col space-y-4 p-2 mt-5 m-2">
                                  <div className="flex flex-col space-y-2 w-full">
                                    <div className="flex items-center space-x-2">
                                      <p className="flex-1">Who we Are</p>
                                      <button onClick={handleAbout} className='text-gray-600 hover:text-gray-900'>
                                      <FontAwesomeIcon 
                                        icon={faChevronDown}                                          
                                        className={`transition-transform duration-500 ${isAboutOpen ? 'rotate-180' : ''}`} 
                                      />
                                      </button>
                                      
                                    </div>
                                    {isAboutOpen && (
                                      <div className="flex flex-col space-y-2  transform-all ease-in duration-500 max-h-40 overflow-hidden bg-gray-100 p-2 mt-2">
                                        <Link href="">About</Link>                  
                                        <Link href="">Mission and Vision</Link>                                        
                                      </div>
                                    )}
                                  </div>
                                  <div className="bg-blue-400 w-64 h-0.5"></div>
                                  <Link href="">Projects</Link>
                                  <div className="bg-blue-400 w-64 h-0.5"></div>

                                  <div className="flex flex-col space-y-2 w-full">
                                    <div className="flex items-center space-x-2">
                                      <p className="flex-1">Get involved</p>
                                      <button className='text-gray-600 hover:text-gray-900'>
                                      <FontAwesomeIcon 
                                        icon={faChevronDown} 
                                         onClick={handleGetInvolved} 
                                        className={`transition-transform duration-500  ${isGetInvolved ? 'rotate-180' : ''}`} 
                                      />
                                      </button>
                                    </div>
                                    {isGetInvolved && (
                                      <div className="flex flex-col space-y-2  transform-all ease-in duration-500 max-h-40 overflow-hidden bg-gray-100 p-2 mt-2">
                                        <Link href="">Donate</Link>
                                        <Link href="">Volunteer</Link>
                                        <Link href="">Events</Link>
                                      </div>
                                    )}
                                  </div>
                                  <div className="bg-blue-400 w-64 h-0.5"></div>

                                  <Link href="">News</Link>
                                  <div className="bg-blue-400 w-64 h-0.5"></div>

                                  <Link href="/pages/contact">Contact</Link>
                                  <div className="bg-blue-400 w-64 h-0.5"></div>

                                </div>
                      </div>
              </div>
        </nav>

  )
}

export default Navbar