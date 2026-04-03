import React from 'react'
import { X } from 'lucide-react'

function TaskNum({data}) {
  return (
    <div className='flex flex-wrap justify-evenly gap-3'>
        <div className='new-task h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-amber-600 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.newTask}</h2>
            <h3 className='text-2xl mt-2'>New Task 🆕</h3>
        </div>
        <div className=' active-task h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-[#14532D] rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.active}</h2>
            <h3 className='text-2xl mt-2'>Active ⏳</h3>
        </div>
        <div className='completed-task h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-purple-800 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.completed}</h2>
            <h3 className='text-2xl mt-2'>Completed ✅</h3>
        </div>
        <div className='failed-task h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-pink-900 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.failed}</h2>
            <h3 className='text-2xl mt-2 flex items-center gap-2'>Failed <span><X className='text-orange-950' /></span></h3>
        </div>
    </div>
  )
}

export default TaskNum
