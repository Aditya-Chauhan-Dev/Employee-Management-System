import React from 'react'
import { HandMetal } from 'lucide-react';

function Header({data}) {

  const logOut=()=>{
    window.location.reload()
  }

  return (
    <div className='flex items-center justify-between py-15 px-10 bg-gray-600 h-[20%]'>
      <div className='flex items-center gap-3 text-black'>
        <h3 className='text-2xl'>Hello,<br /> <span className='text-4xl font-semibold'>{data.name} </span></h3>
        <HandMetal size={52} strokeWidth={1.25} />
      </div>
      <button onClick={logOut} className='bg-black text-xl p-3 rounded-lg text-white border-2 border-amber-300'>Log out</button>
    </div>
  )
}

export default Header
