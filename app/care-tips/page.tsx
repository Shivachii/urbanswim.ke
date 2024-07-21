import React from 'react'
import Image from 'next/image'

const Care = () => {
  return (
    <div className='pt-10 '>
        <h1 className='text-center font-bold text-3xl my-10 '>
        Urbaneswimke Swimwear Care Tips
        </h1>
       <div className="relative grid grid-cols-2  bg-gradient-to-b from-zinc-600 to-zinc-900  text-white">
            <div className="p-2 mx-2 my-4">
                <h1 className="absolute z-0">URBANSWIM</h1>
                <div className="p-2 mx-2 my-4">
                <h1 className="font-bold text-2xl my-2">
                    CARE TIP 1
                </h1>
                <h3 className="font-medium  my-2">
                Before You Wear
                </h3>
                <p className=' text-pretty'>
                Rinse your new swimwear in cold water before wearing it for the first time.
                 This helps remove any excess dye and prevents colors from bleeding.
                </p>
                <h3 className="font-medium  my-2">
                After Each Use
                </h3>
                <p className='text-pretty '>
                After swimming, rinse your swimwear in cold, fresh water as soon as possible.
                 This helps to remove chlorine, salt, sand, and sunscreen, which can all cause damage to the fabric.
                </p>
                </div>
              
                <div className="p-2 mx-2 my-4">
            <h1 className="font-bold">
                    CARE TIP 2
                </h1>
                <h3 className="font-medium  my-2">
                Hand Wash Only
                </h3>
                <p className=' text-pretty'>
                Always hand wash your swimwear using mild detergent.
                 Avoid using harsh chemicals, bleach, or fabric softeners, as these can break down the fabric and elastic.
                </p>
                <h3 className="font-medium my-2">
                Gentle Washing
                </h3>
                <p className='text-pretty '>
                Gently rub the fabric together to remove any dirt or residue. 
                Avoid wringing or twisting the swimwear, as this can cause stretching and damage.
                </p>
            </div>
            </div>
            <div className="relative bg-[url('/tips.jpg')] bg-cover bg-center bg-no-repeat p-2 mx-4 my-20 h-64 sm:h-96"></div>

            <div className="relative bg-[url('/bikini.jpg')] bg-cover bg-center bg-no-repeat p-2 mx-4 my-12  h-64 sm:h-96"></div>

            

            <div className="p-2 mx-2 my-4">
            <div className="p-2 mx-2 my-4">
            <h1 className="font-bold">
                    CARE TIP 3
                </h1>
                <h3 className="font-medium  my-2">
                Drying
                </h3>
                <p className=' text-pretty '>
                Lay your swimwear flat to dry in a shaded area. Avoid direct sunlight, as UV rays can cause colors to fade and the fabric to weaken.
                </p>
                <p className=' text-pretty'>
                Do not use a tumble dryer or iron your swimwear. Heat can damage the elasticity and shape of the fabric.
                </p>
            </div>
            <div className="p-2 mx-2 my-4">
            <h1 className="font-bold">
                    CARE TIP 4
                </h1>
                <h3 className="font-medium my-2">
                Storage
                </h3>
                <p className=' text-pretty'>
                Store your swimwear flat in a cool, dry place. Avoid leaving it damp or in direct sunlight for extended periods, as this can cause mold and fading.
                </p>
            </div> 
                </div> 
            
            
       </div>

    </div>
  )
}

export default Care 