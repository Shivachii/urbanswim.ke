'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    const scrolltoHash = (element_id: string) => {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

  return (
    <div className='relative  bg-slate-100'>
         <div className=' grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 p-4 '>
                <div>
                <h1 className='font-medium text-lg p-2 m-2'>
                        <span className='underline decoration-black underline-offset-8 decoration-2'>Help</span> 
                    </h1>
                    <ul className=' m-2'>
                    <li className='m-2 '>
                            <Link 
                                href='/Faq'
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Frequently Asked Questions</p>  
                            </Link>
                        </li>
                    <li className='m-2 '>
                            <Link 
                                href='/fit-guide'
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Size Guide</p>  
                            </Link>
                        </li>
                    <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Shipping and Delivery</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Payment Options</p>  
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                <h1 className='font-medium text-lg p-2 m-2'>
                        <span className='underline decoration-black underline-offset-8 decoration-2'>Shop</span>
                    </h1>
                    <ul className='m-2'>
                        <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Men</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Women</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Kids</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Accessories</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href='/products/gift-cards'
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Gift Cards</p>  
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium text-lg p-2 m-2'>
                        <span className='underline decoration-black underline-offset-8 decoration-2'>Customer Care</span>
                    </h1>
                    <ul className=' m-2'>
                    <li className='m-2 '>
                            <Link 
                                href=''
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Need help?</p>  
                            </Link>
                        </li>
                        <li className='m-2 '>
                        <Link
                                href="https://wa.me/message/WFDBTOE677NNL1"
                                target="_blank"
                                rel="noopener noreferrer"
                               >
                               <span  className='hover:underline decoration-2 underline-offset-4 decoration-slate-400  hover:translate-x-2 duration-200'>
                               Whatsapp : +254 712 785 836
                                </span> 
                            </Link>
                        </li>
                        <li className='m-2 '>
                            <Link 
                                href='/contact'
                            >
                                <p className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Contact Us</p>  
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='relative lg:absolute bottom-0 right-0 p-4 mt-12 flex flex-row space-x-4 text-xl '>
                        <Link
                            href="https://wa.me/message/WFDBTOE677NNL1"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp}  />
                        </Link>
               
                    <Link href='https://www.instagram.com/urbaneswim.ke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                    target='blank'>
                         <FontAwesomeIcon icon={faInstagram}/>
                    </Link>
               
                                <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter}  />
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook}  />
                        </Link>
                
            </div>
            <div className='flex flex-col md:flex-row text-sm p-2 m-2'>
                <strong>©2024, URBANESWIMKE ALL RIGHTS RESERVED</strong>
                <ul className='flex flex-row px-4 mx-4 space-x-8 list-disc text-xs '>
                    <li>
                    <Link 
                                href='/policies/privacy-policy'
                            >
                                <p className=' hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Privacy Policy</p>  
                            </Link>
                    </li>
                    <li>
                    <Link 
                                href='/policies/terms-of-service'
                            >
                                <p className=' hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Terms of Service</p>  
                            </Link>
                    </li>
                    <li>
                    <Link 
                                href='/Faq'
                                onClick={() => scrolltoHash('Delivery')} 
                            >
                                <p className=' hover:underline decoration-2 underline-offset-4 decoration-slate-400'> Shipping Policy</p>  
                            </Link>
                    </li>
                </ul>
            </div>
    </div>
           
  )
}

export default Footer