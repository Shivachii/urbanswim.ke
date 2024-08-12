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
    <main className="relative grid grid-cols-2 gap-4 mx-4">
      <div className="w-full  ">
        <Image
          src="/giftcard.png"
          alt="Gift Card"
          width={800}
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
        <div className="flex flex-wrap space-x-2 mt-2">
  {[2000, 3000, 4000, 5000, 6000, 8000, 10000, 15000, 20000].map((amount) => (
    <button
      key={amount}
      className={`bg-black text-white text-xs rounded-full w-[70px] h-[70px] mb-2 ${
        selectedDenomination === amount ? 'opacity-80 p-2 text-white' : ''
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
        <div className=" mt-6">
          <h1 className='text-slate-500 font-bold underline underline-offset-8 decoration-2 decoration-slate-800'>Please Note</h1>
          <ul className='text-sm my-2 p-2 list-inside list-decimal '>
            <li>Purchasing this digital gift voucher creates a unique code.</li>
            <li>The voucher is valid for purchases on <Link href='/' className='hover:underline underline-offset-4 decoration-slate-800 hover:text-gray-800'>www.urbaneswim.ke</Link> only.</li>
            <li>The gift voucher recipient can enter this code at checkout to gift voucher value from their order total.</li>
            <li>The gift voucher is non-refundable and expires after one year of purchase.</li>
            <li>One can&apos;t redeem the gift card for cash</li>
            <li>This voucher can&apos;t be redeemed for SALE items</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Cards;
