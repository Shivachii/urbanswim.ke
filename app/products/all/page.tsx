'use client'
import React from 'react'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Accessories from './components/Accessories'

const All = () => {
  return (
    <div className='mt-10 pt-20 m-10 p-10'>
        <div className="my-8">
          <Men />
        </div>
        <div className="my-8">
          <Women/>
        </div>
        <div className="my-8">
          <Kids />
        </div>
        <div className="my-8">
          <Accessories/>
        </div>
    </div>
  )
}

export default All