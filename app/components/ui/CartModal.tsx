'use client'
import Link from 'next/link'
import React from 'react'

const CartModal = () => {

    const cartItems = true
  return (
    <div className='absolute right-8 z-50 shadow-xl bg-white w-max  m-4 p-4 flex flex-col'>
        {
          !cartItems ? (
            <div>
              <h1 className='font-semibold'>Looks like your cart is empty</h1>
               <Link href='/list' className='hover:font-medium hover:underline underline-offset-8 decoration-slate-400 p-2 m-2'>Continue Shopping &rarr;</Link> 

            </div>

          ) :

          <div className='flex flex-col gap-8'>
            <>
            <h2 className='font-bold'>Shopping Cart</h2>
            {/* ITEM */}
               <div className='flex gap-4'>
            <img src="/bag.jpg" alt="" height={96} width={70}
            className='rounded-md object-cover'
            />
            <div className="flex flex-col justify-between w-full">
              {/* top */}
              <div className="">
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className='font-semibold'>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>Ksh 1200</div>
                </div>
                {/* desc */}
                <div className=" text-sm text-gray-500">
                  Available
                </div>
                <div className="flex justify-between text-sm">
                <span className='text-gray-500'>
                  Qnty. 2
                  </span>
                  <span className='text-blue-500'>
                    Remove
                  </span>
              </div>
              </div>
              
            </div>
          </div> 
          {/* ITEM 2 */}
          <div className='flex gap-4'>
            <img src="/bag.jpg" alt="" height={96} width={70}
            className='rounded-md object-cover'
            />
            <div className="flex flex-col justify-between w-full">
              {/* top */}
              <div className="">
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className='font-semibold'>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'>Ksh 1200</div>
                </div>
                {/* desc */}
                <div className=" text-sm text-gray-500">
                  Available
                </div>
                <div className="flex justify-between text-sm">
                <span className='text-gray-500'>
                  Qnty. 2
                  </span>
                  <span className='text-blue-500'>
                    Remove
                  </span>
              </div>
              </div>
              
            </div>
          </div> 
          </>  
          {/* Bottom */}
              <div className=''>
                <div className='font-semibold flex items-center justify-between'>
                  <span>
                      Subtotal
                    </span>
                    <span>
                      Ksh 2400
                    </span>
                </div>
                
                <p className='text-sm font-light text-gray-500'>
                  Delivery and Taxes calculated at checkout
                </p>
                <div className="flex justify-between text-sm mt-2">
                <button className='rounded-md py-2 px-3 ring-1 ring-gray-300 hover:bg-slate-100'>View Cart</button>
                <button className='rounded-md py-2 px-3 ring-1 ring-gray-300 bg-black text-white hover:opacity-80 '>Check Out</button>
                </div>
              </div>      
          </div>
          
        }
                
     </div>
  )
}

export default CartModal