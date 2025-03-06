import React from 'react'       
import { IoMdReturnRight } from "react-icons/io";


function Button() {
  return (
    <div className='min-w-30 min-h-7 px-4 py-2 bg-zinc-100 text-black rounded-full flex justify-around items-center'>
        <span className='text-sm font-medium'>Get Started</span>
        <IoMdReturnRight />
    </div>
  )
}

export default Button