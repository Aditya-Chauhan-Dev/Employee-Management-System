import React from 'react'

function NewTask({data}) {
  return (
    <div className='new-task h-full w-75 shrink-0 rounded-xl px-4 py-5'>
        <div className='flex justify-between items-center text-sm'>
            <h3 className='bg-red-700 px-3 py-1 rounded font-semibold text-white'>{data.category}</h3>
            <h4 className='text-white font-medium'>{data.taskDate}</h4>
        </div>
        <div className='mt-10'>
            <h2 className='font-bold text-lg underline'>{data.taskTitle}</h2>
            <p className='text-gray-900 font-semibold leading-tight py-2'>{data.taskDescription}</p>
        </div>
    </div>
  )
}

export default NewTask
