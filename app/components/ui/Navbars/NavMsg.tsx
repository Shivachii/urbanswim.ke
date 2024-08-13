import React from 'react'
import  { introMsg } from  '@/app/data/data'

const NavMsg = () => {
  return (
    <div className='p-2 m-2 overflow-hidden'>
        {
          introMsg.map((msg) => {
            return <p key={msg.id} className='text-sm leading-relaxed '>{msg.name}</p>;
          })        
        }
    </div>
  )
};

export default NavMsg