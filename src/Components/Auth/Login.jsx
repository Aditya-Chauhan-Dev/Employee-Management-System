import React, { useState } from 'react'

function login({handler}) {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  function submit(e){
    e.preventDefault()
    handler(mail,password)
    setMail('')
    setPassword('')
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-gray-500 rounded-2xl lg:w-1/2 flex flex-col justify-evenly h-2/3'>
        <form
        onSubmit={(e)=>{submit(e)}} 
        className='flex flex-col px-6 py-5 text-gray-400'>
          <input
          value={mail}
          onChange={(e)=>{setMail(e.target.value)}}
          type="email" required
          className='bg-transparent border-2 border-gray-500 outline-none text-xl rounded-full px-5 py-4 placeholder:text-gray-500'
          placeholder='Enter your Email'/>
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          type="password" required
          className='bg-transparent border-2 border-gray-500 mt-10 outline-none text-xl rounded-full px-5 py-4 placeholder:text-gray-500'
          placeholder='Enter your password'/>
          <button className='bg-gray-900 px-5 py-4 mt-25 rounded-full font-semibold text-xl active:scale-95'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default login
