'use client'
import React from 'react'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm