import React from 'react'
import WomensTable from './tables/WomensTable'
import Mens from './tables/Mens'
import Kids from './tables/Kids'


       

const Fit = () => {
  return (
    <div className="m-20 mt-5 pt-5 p-20 relative">
        <h1 className="font-bold text-3xl text-center my-4">
            Urbaneswimke Fit Guide
        </h1>
        <p className="text-lg">
        At Urbaneswimke, we understand that finding the perfect fit 
        is essential for your comfort and style. Our Fit Guide is 
        designed to help you choose the right size for your body type.
         Follow these guidelines to ensure you select the best fit for your swimwear.
        </p>
        <div className="">
            <h1 className='font-medium text-xl my-2'>
                How to Measure
            </h1>
            <div className='p-2 m-2'>
                <h1 className='font-medium'>
                    1. Bust
                </h1>
            <ul className='list-disc list-inside mx-2 p-2'>
                <li>
                Measure around the fullest part of your bust, keeping the tape measure parallel to the floor.
                </li>
                <li>
                Ensure the tape is snug but not tight.
                </li>
            </ul>
            </div>
            <div className='p-2 m-2'>
                <h1 className='font-medium'>
                2. Waist
                </h1>
            <ul className='list-disc list-inside mx-2 p-2'>
                <li>
                Measure around the narrowest part of your waist, usually just above your belly button.
                </li>
                <li>
                Keep the tape measure comfortably loose.
                </li>
            </ul>
            </div>
            <div className='p-2 m-2'>
                <h1 className='font-medium'>
                3. Hips
                </h1>
            <ul className='list-disc list-inside mx-2 p-2'>
                <li>
                Stand with your feet together and measure around the fullest part of your hips.
                </li>
                <li>
                Make sure the tape measure is parallel to the floor.
                </li>
            </ul>
            </div>
            <div className='p-2 m-2'>
                <h1 className='font-medium'>
                4. Torso
                </h1>
            <ul className='list-disc list-inside mx-2 p-2'>
                <li>
                Measure from your shoulder, down through your crotch, and back up to the starting point.
                </li>
                <li>
                This measurement is crucial for one-piece swimsuits.
                </li>
            </ul>
            </div>
            <div className='p-2 m-2'>
                <h1 className='font-medium text-xl my-2'>
                Use our size charts to find your size
                </h1>
                <p>
                Remember, the perfect body is the one you already have. Let's embrace our bodies with love and positivity, 
                and let your inner beauty radiate with every step you take. You are beautiful, just the way you are !
                </p>
                <div className="p-2 m-2">
                    <div className="">
                        <h1 className='font-bold'>
                        Women&apos;s Size Chart
                        </h1>
                       <WomensTable />
                    </div>
                    <div className="">
                        <h1 className='font-bold '>
                            Men&apos;s Size Chart
                        </h1>
                        <Mens />
                    </div>
                    <div className="">
                        <h1 className='font-bold '>
                            Children&apos;s Size Chart
                        </h1>
                        <Kids />
                        
                    </div>
                </div>
            </div>
            

            
        </div>
    </div>
  )
}

export default Fit