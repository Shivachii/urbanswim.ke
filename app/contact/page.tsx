"use client"

import React from 'react'
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { cn } from "@/utils/cn";
import Link from 'next/link';


const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  

  return (

    <div className='w-full pt-20 pb-20 '>      
         <div className='text-center'>
                <h1 className='text-4xl font-bold'>
                    CONTACT US
                </h1>
                <h1 className='text-2xl font-semibold my-4'>
                    How can we help?
                </h1>
         <div className='relative mx-32 text-center'>
                <p>
                    Our customer service team is available to answer your questions, 
                    and we love hearing about your experiences with UrbaneSwimKe. 
                    We've put together a helpful list of FAQs, including sections
                    for general inquiries and international shoppers.
                    Additionally, our fit guide is designed to help you find your perfect fit.
                </p>
                <div className='absolute -my-8 inset-x-0 bottom-0 flex justify-center space-x-8'>
                    <Link href='/Faq' className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'>Faqs</Link>
                    <Link href='' className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'>Care Tips</Link>
                    <Link href='/fit-guide' className='hover:translate-x-2 duration-200 hover:underline decoration-2 underline-offset-4 decoration-slate-400'>Size Guide</Link>
                </div>
         </div>

                
            </div>
        
     
        
         
    </div>             

  );
};


export default Contact;
