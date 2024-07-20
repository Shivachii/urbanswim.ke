import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const list = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap p-10 m-10'>
        
        <Link href='' className='relative w-full h-80 flex flex-col gap-4 sm:[45%] lg:[22%]'>
        <div>
        <Image src='/african.jpg'  alt='' sizes='25vw' fill className='absolute object-cover z-10 rounded-md hover:opacity-0 transition-opacity ease-in duration-500'>
        </Image>
        <Image src='/bag.jpg'  alt='' sizes='25vw' fill className='absolute object-cover rounded-md'>
        </Image>
        </div>
        <div className='flex justify-between'>
            <span>
                Prod Name
            </span>
            <span>
                Ksh 200
            </span>
        </div>
        <div className="text-sm text-gray-500">
            My desc
        </div>
        <button className="m-4  bg-black text-white hover:opacity-80 rounded-3xl w-[200px] h-[40px]">Add to Cart</button>
        </Link>
       

    </div>
  )
}

export default list
