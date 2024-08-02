'use client'
import React from 'react'
import Link from 'next/link'
import Returns from './Accordions/Accordion'
import Delivery from './Accordions/Delivery'
import Standard from './Accordions/Standard'

const Faq = () => {

    const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
      <div className='bg-white py-10 my-10  '>
          <h1 className='font-bold text-center text-2xl pb-4 mb-4'>
              Frequently Asked Questions
          </h1>
              <div className=' flex'>
                  <div className=' w-1/4   p-2 m-2 ' >
                      <ul className='flex flex-col p-2 m-2'>
                          <li className='my-4'>
                              <Link
                                  href=''
                                  onClick={() => scrolltoHash('Returns')}
                                  scroll={false}
                                  className='hover:cursor-pointer'

                                  >
                              <p className='hover:underline underline-offset-8 decoration-slate-400  hover:translate-x-2 duration-200'>Returns and Exchanges</p>
                              </Link>
                          </li>
                          <li className='my-4'>
                              <Link
                                  href=''
                                  onClick={() => scrolltoHash('Delivery')}
                                  scroll={false}
                                  className='hover:cursor-pointer'

                                 >
                              <p className='hover:underline underline-offset-8 decoration-slate-400  hover:translate-x-2 duration-200'>Delivery and Shipping</p>
                              </Link>
                          </li>
                          <li className='my-4'>
                              <Link
                                  href=''
                                  onClick={() => scrolltoHash('Standard')}
                                  scroll={false}
                                  className='hover:cursor-pointer'
                                  >
                              <p className='hover:underline underline-offset-8 decoration-slate-400  hover:translate-x-2 duration-200'>Standard questions</p>
                              </Link>
                          </li>
                         
                      </ul>
                  </div>
                  <div className='w-3/4 '>
                      <div className='m-2 p-2' id='Returns'>
                      <h1 className='font-semibold text-xl'>
                          Returns and Exchanges
                      </h1>
                          <div > 
                         <Returns />
                          </div> 
                      </div>
                      <div className='m-2 p-2' id='Delivery'>
                      <h1 className='font-semibold text-xl'>
                          Delivery and Shipping
                      </h1>
                          <div >
                          <Delivery />
                          </div>
                      </div>
                      <div className='m-2 p-2' id='Standard'>
                      <h1 className='font-semibold text-xl'>
                         Standard Questions
                      </h1>
                          <div > 
                         <Standard />
                          </div> 
                      </div>


                  </div>
              </div>
      </div>
  );
}

export default Faq