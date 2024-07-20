'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Counter from '@/app/components/ui/Counter';
import Link from 'next/link';

const Cards = () => {
  const [selectedDenomination, setSelectedDenomination] = useState<number | null>(null);

  const handleDenomination = (amount: number) => { 
    setSelectedDenomination(amount);
  };

  return (
    <div className="relative grid grid-cols-2 gap-4">
      <div className="bg-slate-400 ">
        <Image
          src="/bag.jpg"
          alt="Gift Card"
          width={200}
          height={200}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col p-2 m-2">
        <h1 className="text-xl font-bold">GIFT CARDS</h1>
        <h3 className="mt-4 text-gray-500">
          {selectedDenomination && <div><p>Ksh {selectedDenomination}</p></div>}
        </h3>
        <h4 className="mt-8 text-gray-500">Denominations</h4>
        <div className="flex flex-row space-x-4 mt-2">
          {[500, 1500, 2500, 3500, 4500, 5500].map((amount) => (
            <button
              key={amount}
              className={`bg-black text-white text-xs rounded-full w-[60px] h-[60px]  ${
                selectedDenomination === amount ? '  opacity-80 p-2 text-white' : ''
              }`}
              onClick={() => handleDenomination(amount)}
            >
              Ksh {amount}
            </button>
          ))}
        </div>
        <div className="mt-8 p-2">
          <h3 className="font-light">Amount + </h3>
          <div className="flex flex-row space-x-8 mt-2">
            <Counter />
            <button className="bg-black text-white hover:opacity-90 px-28 py-2">
              Add to Cart
            </button>
          </div>
        </div>
        <div className='mt-8'>
          <h1 className='text-slate-500 font-bold'>
            Description
          </h1>
          <p className='text-sm'>
          Undecided? Give the thoughtful gift of a Urbane Swim Ke Gift Card, allowing your special someone to choose their perfect fit!
          </p>
          <p className='text-sm mt-2'>
          It may take up to 1 business day to receive your gift card information.
           If you have any questions, please email our customer service team through our <Link href='/contact' className='hover:underline underline-offset-4 decoration-slate-500 decoration-2'> contact page.
           </Link> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
