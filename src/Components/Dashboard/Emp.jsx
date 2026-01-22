import React from 'react'
import Header from '../SmlCOmp/Header'
import TaskNum from '../SmlCOmp/TaskNum'
import TaskList from '../TaskList/TaskList'

function Emp({data}) {
  return (
    <div className='w-screen'>
      <Header data={data} />
      <TaskNum data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default Emp
