
'use client';

import React from 'react';
import Link from 'next/link';

const FaqSidebar = ({ scrolltoHash }: { scrolltoHash: (id: string) => void }) => {
  return (
    <div className='w-1/4 p-2 m-2'>
      <ul className='flex flex-col p-2 m-2'>
        <li className='my-4'>
          <Link href='' onClick={() => scrolltoHash('Returns')} scroll={false} className='hover:cursor-pointer'>
            <p className='hover:underline underline-offset-8 decoration-slate-400 hover:translate-x-2 duration-200'>Returns and Exchanges</p>
          </Link>
        </li>
        <li className='my-4'>
          <Link href='' onClick={() => scrolltoHash('Delivery')} scroll={false} className='hover:cursor-pointer'>
            <p className='hover:underline underline-offset-8 decoration-slate-400 hover:translate-x-2 duration-200'>Delivery and Shipping</p>
          </Link>
        </li>
        <li className='my-4'>
          <Link href='' onClick={() => scrolltoHash('Standard')} scroll={false} className='hover:cursor-pointer'>
            <p className='hover:underline underline-offset-8 decoration-slate-400 hover:translate-x-2 duration-200'>Standard questions</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FaqSidebar;
