import React, { useState } from 'react'
import { UsersRound } from 'lucide-react'

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
      <div className='login-form rounded-2xl lg:w-1/2 flex flex-col justify-evenly h-2/3 items-center'>
        <div className='text-white flex text-3xl items-center gap-2 px-2'>
          <UsersRound size={40} className='text-blue-300' />
          <h1 className='font-semibold'>Employee Management</h1>
        </div>
        <form
        onSubmit={(e)=>{submit(e)}} 
        className='flex flex-col px-6 gap-8 items-center text-gray-400 lg:w-2/3'>
          <input
          value={mail}
          onChange={(e)=>{setMail(e.target.value)}}
          type="email" required
          className='bg-transparent border-2 border-gray-500 outline-none text-xl rounded-full w-2/3 px-5 py-4 placeholder:text-gray-500'
          placeholder='Enter your Email'/>
          
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          type="password" required
          className='bg-transparent border-2 border-gray-500 outline-none text-xl rounded-full w-2/3 px-5 py-4 placeholder:text-gray-500'
          placeholder='Enter your password'/>

          <button className='login-btn'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default login
