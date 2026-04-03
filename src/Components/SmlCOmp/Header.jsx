import React from 'react'
import { HandMetal } from 'lucide-react';

function Header({data}) {

  const logOut=()=>{
    window.location.reload()
  }

  return (
    <div className='flex items-center justify-between py-15 px-10 bg-transparent h-30 text-white'>
      <div className='flex items-center gap-2'>
        <h3 className='text-xl'>Hello,</h3>
        <span className='text-3xl font-semibold'>{data.name} </span>
        <HandMetal size={40} strokeWidth={1} className='text-green-600' />
      </div>
      <button onClick={logOut} className='bg-black text-xl px-5 py-2 rounded-lg text-white border border-amber-300'>Log out</button>
    </div>
  )
}

export default Header
