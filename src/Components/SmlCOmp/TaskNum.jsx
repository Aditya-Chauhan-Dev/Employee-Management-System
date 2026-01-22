import React from 'react'

function TaskNum({data}) {
  return (
    <div className='flex flex-wrap justify-evenly gap-3 mt-10'>
        <div className='h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-amber-600 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.newTask}</h2>
            <h3 className='text-2xl mt-2'>New Task 🆕</h3>
        </div>
        <div className='h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-[#14532D] rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.active}</h2>
            <h3 className='text-2xl mt-2'>Active ⏳</h3>
        </div>
        <div className='h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-purple-800 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.completed}</h2>
            <h3 className='text-2xl mt-2'>Completed ✅</h3>
        </div>
        <div className='h-40 lg:w-80 w-40 flex flex-col flex-wrap bg-pink-900 rounded-lg px-6 py-6'>
            <h2 className='text-4xl font-semibold'>{data.taskNumber.failed}</h2>
            <h3 className='text-2xl mt-2'>Failed ❌</h3>
        </div>
    </div>
  )
}

export default TaskNum
