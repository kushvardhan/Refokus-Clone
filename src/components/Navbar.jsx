import React from 'react'
import Button from './Button';
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  return (

    <div className='max-w-screen-xl mx-auto min-h-[6vw] py-6 flex items-center justify-between border-b-1 border-zinc-700'>
      
     <div className='nleft flex items-center gap-10'>
     <div className='flex items-center gap-1'>
        <MdArrowOutward className='rotate-270 text-4xl font-bold' /> 
        <h1 className='text-xl font-mono tracking-wide font-medium'>Refokus</h1>
      </div>

      <div className='flex gap-12 items-center'>
        {
          ['Home', 'Work', 'Culture','','News'].map((elem, index) => (
            elem.length === 0 ? <span className='w-[1.5px] h-9 bg-zinc-600'></span> : (
            <a key={index} className='text-sm  flex items-center gap-1' href='#'>
              {index===1 && (<span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 rounded-full bg-green-400'></span>)}
              {elem}
            </a>)
          ))
        }
      </div>
     </div>

      <Button></Button>
    </div>
  );
}

export default Navbar;
