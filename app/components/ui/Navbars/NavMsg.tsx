"use client"
import React, { useEffect, useState } from 'react'
import  { introMsg } from  '@/app/lib/data'

const NavMsg = () => {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(() => {
    // Randomly select an initial index
    return Math.floor(Math.random() * introMsg.length);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex(prevIndex => (prevIndex + 1) % introMsg.length);
    }, 50000); // Change the interval time )

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className='p-2 m-2 overflow-hidden'>
        <div className='text-sm leading-relaxed'>
        {introMsg[currentMsgIndex].name}
      </div>
    </div>
  )
};

export default NavMsg