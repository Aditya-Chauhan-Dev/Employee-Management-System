import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function TaskDetails() {
  const authData=useContext(AuthContext)
  return (
    <div className='text-white mt-5 px-5 flex flex-col gap-3 pb-6'>
      <div className='hidden md:grid grid-cols-5  bg-[#1E293B] items-center justify-betw px-7 py-3 rounded'>
        <span className='text-lg'>Name</span>
        <span className='text-lg'>Tasks</span>
        <span className='text-lg'>Active</span>
        <span className='text-lg'>Complete</span>
        <span className='text-lg'>Failed</span>
      </div>
      <div className='flex flex-col gap-3'>
        {authData.employee.map((elem,idx)=>{
          return <div key={idx} className='border-2 border-gray-600 rounded p-4 flex flex-col gap-3 md:grid md:grid-cols-5 md:items-center md:px-7 md:py-3'>
                  <span className='text-lg text-gray-400 break-word'>{elem.name}</span>
                  <span className='text-lg text-blue-400'>{elem.totalTask}</span>
                  <span className='text-lg text-[#14532D]'>{elem.taskNumber.active}</span>
                  <span className='text-lg text-purple-800'>{elem.taskNumber.completed}</span>
                  <span className='text-lg text-pink-900'>{elem.taskNumber.failed}</span>
                </div>
        })}
      </div>
    </div>
  )
}

export default TaskDetails
