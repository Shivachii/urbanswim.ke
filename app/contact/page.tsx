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
  <div className='absolute -my-8 inset-x-0 bottom-0 flex justify-center space-x-4'>
    <Link href=''>Faqs</Link>
    <Link href=''>Care Tips</Link>
    <Link href=''>Size Guide</Link>
  </div>
</div>

                
            </div>
        
     
        
          <div className='flex-row gap-8 bg-red-300 p-8 m-8'>  
      <form className="my-8 " onSubmit={handleSubmit}>
             <h2 className="font-bold text-xl my-2 ">
                 Get in Touch with Us
             </h2>
            <LabelInputContainer className="mb-4">
            <Label htmlFor="firstname">Your name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
        
             <LabelInputContainer className="mb-4">
             <Label htmlFor="email">Email Address</Label>
             <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
             </LabelInputContainer>
             <LabelInputContainer className="mb-4">
             <Label htmlFor="subject">Subject</Label>
             <Input id="subject" placeholder="Subject" type="text" />
             </LabelInputContainer>
             <LabelInputContainer className="mb-8">
             <Label htmlFor="message">Your Message</Label>
              <textarea
              id='message' 
              placeholder='Your Message' 
              className= "py-5 px-3 text-sm rounded-md bg-slate-200 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-purple-800"/>
                    
             </LabelInputContainer>

             <button
                type="submit"
                 className="m-4 bg-black text-white hover:opacity-80  w-[150px] sm:w-[200px] h-[40px]"
              >
                Submit &rarr;
              </button>
        </form>
        </div>
    </div>             

  );
};


export default Contact;
