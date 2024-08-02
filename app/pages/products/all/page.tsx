'use client'
import React from 'react'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Accessories from './components/Accessories'
import Link from 'next/link'

const All = () => {
  return (
    <div className='relative m-10 p-10'>
        <div className="relative my-4  text-end">
          <Men />
          <Link href='' className=' m-2 p-2 right-0 font-bold hover:underline underline-offset-4 decoration-slate-600'>View All &rarr;</Link>
        </div>
        <div className="my-8 py-8  text-end">
          <Women/>
          <Link href='' className=' m-2 p-2 right-0 font-bold hover:underline underline-offset-4 decoration-slate-600'>View All &rarr;</Link>

        </div>
        <div className="my-8  text-end">
          <Kids />
          <Link href='' className=' m-2 p-2 right-0 font-bold hover:underline underline-offset-4 decoration-slate-600'>View All &rarr;</Link>

        </div>
        <div className="my-8  text-end">
          <Accessories/>
          <Link href='' className=' m-2 p-2 right-0 font-bold hover:underline underline-offset-4 decoration-slate-600'>View All &rarr;</Link>

        </div>
    </div>
  )
}

export default All