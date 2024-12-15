import React from 'react'
import { Animal } from '../Dataset/data'
import { motion } from "motion/react"

const Cart = ({referunce}) => {
  return (
    <div className='w-full z-[1]'>
        <div className='flex gap-10 p-10 w-full'>
            {
                Animal.map((items)=>(
                    <motion.div drag dragConstraints={referunce} whileDrag={{scale:1.1}} dragTransition={{bounceDamping:5,bounceStiffness:100}} className='flex flex-col justify-between items-center p-8 shadow-md w-full bg-white/80 rounded-md'>
                        <div className=' w-[145px] border'>
                            <img src={items.image} alt="" className='w-[245px] object-cover' />
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold text-gray-500'>{items.animal}</h1>
                        </div>
                        <button className=' bg-green-800 p-2 w-full text-white rounded-md'>Download</button>

                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart