import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const StartReturn = () => {
  return (
    <main className="w-full pt-5 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Start a Return</h1>
        <p className="mb-4 text-center">
          We understand that sometimes things don&apos;t work out. If you need to start a return, we&apos;re here to help. You can reach us through one of the following methods:
        </p>

        <div className="flex flex-row space-x-8 justify-center items-center m-4 p-4">
          <div className=" w-64 h-48 rounded-md border border-slate-950 p-2 m-2 flex flex-col space-y-4 justify-center items-center shadow-xl hover:-translate-y-2 duration-300">
            <FontAwesomeIcon icon={faPhone} className='w-[30px] h-[30px] bg-slate-50 rounded-full p-2'/>
            <h2 className="text-xl font-semibold">Call Us</h2>
            <Link href="tel:+254 712 785 836" className="hover:underline underline-offset-8">Phone: +254 712 785 836</Link>
          </div>

          <div className="w-64 h-48 rounded-md border border-slate-950 p-2 m-2 flex flex-col space-y-4 justify-center items-center shadow-xl hover:-translate-y-2 duration-300">
          <FontAwesomeIcon icon={faInbox} className='w-[30px] h-[30px] bg-slate-50 rounded-full p-2'/>
            <h2 className="text-xl font-semibold">Email Us</h2>
            <Link href='' target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8">support@urbaneswimke.com</Link>
          </div>

          <div className="w-64 h-48 rounded-md border border-slate-950 p-2 m-2 flex flex-col space-y-4 justify-center items-center shadow-xl hover:-translate-y-2 duration-300">
          <FontAwesomeIcon icon={faInstagram} className='w-[30px] h-[30px] bg-slate-50 rounded-full p-2'/>
            <h2 className="text-xl font-semibold">Find Us on Instagram</h2>
            <Link href="https://www.instagram.com/urbaneswim.ke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8">@urbaneswim.ke</Link>
          </div>
        </div>

        <p className="text-center mt-8">
          Our team will guide you through the return process and ensure that everything is taken care of as quickly as possible.
        </p>
      </div>
    </main>
  );
};

export default StartReturn;
