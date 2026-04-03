import React, { useContext, useState } from 'react'
import AuthProvider from '../../Context/AuthProvider'

function TaskCreate() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [assingTo, setAssingTo] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [data, setData] = useState([])
  const Submit = (e) => {
  e.preventDefault()

  const newTask = {
    taskTitle: title,
    taskDate: date,
    category,
    taskDescription: description,
    active: false,
    completed: false,
    failed: false,
    newTask: true,
  }

  // 1️⃣ Get employees from localStorage
  const employees = JSON.parse(localStorage.getItem("employees")) || []
  

  // 2️⃣ Find employee by name
  const updatedEmployees = employees.map(emp => {
    if (emp.name === assingTo) {
      return {
        ...emp,
        totalTask: (emp.totalTask) + 1,
        tasks: [...emp.tasks, newTask],
        taskNumber: {
          ...emp.taskNumber,
          newTask: emp.taskNumber.newTask + 1,
        }
      }
    }
    return emp
  })

  // 3️⃣ Save back to localStorage
  localStorage.setItem("employees", JSON.stringify(updatedEmployees))

  // 4️⃣ Reset form
  setTitle("")
  setDate("")
  setAssingTo("")
  setCategory("")
  setDescription("")
}

  return (
    <div className='px-10 mt-5 flex items-center justify-center'>
      <form onSubmit={(e)=>{Submit(e)}} className='task-form border-2 rounded-3xl border-gray-500 text-white px-10 py-5 w-full flex flex-col b'>
        <div className='flex justify-between items-start flex-wrap gap-2 lg:w-full'>
            <div className='flex flex-col items-start gap-2 lg:w-[70%] '>

                <h2 className='font-normal text-base'>Task Title</h2>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='Enter task' className='outline-none border rounded px-2 py-1 text-sm w-full' />

                <div className='lg:flex items-center w-[50%] justify-between'>
                  <div className='flex flex-col items-start gap-2'>
                    <h2 className='font-normal text-base'>Date</h2>
                    <input value={date} onChange={(e)=>{setDate(e.target.value)}} id='date' type="date" className='outline-none border rounded px-2 py-1 text-s'/>
                  </div>

                  <div className='flex flex-col items-start gap-2'>
                    <h2 className='font-normal text-base'>Assing to</h2>
                    <input value={assingTo} onChange={(e)=>{setAssingTo(e.target.value)}} type="text" placeholder='Employee name' className='outline-none border rounded px-2 py-1 text-sm w-full' />
                  </div>
                </div>

                <div className='flex flex-col items-start gap-2'>
                  <h2 className='font-normal text-base'>Category</h2>
                  <input value={category} onChange={(e)=>{setCategory(e.target.value)}} type="text" placeholder='design,dev,etc' className='outline-none border rounded px-2 py-1 text-sm w-full'/>
                </div>
            </div>
            <div className='lg:w-[20%]'>
                <h2 className='font-normal text-base'>Description</h2>
                <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='description' className='outline-none border px-2 py-1 text-sm h-40 w-50'></textarea>
            </div>
        </div>
        <div className='py-5 w-full'>
          <button className='login-btn '>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default TaskCreate