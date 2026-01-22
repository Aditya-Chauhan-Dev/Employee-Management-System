import React from 'react'
import Active from './Active'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

function TaskList({data}) {
  return (
    <div id='taskList' className='lg:h-70 h-50  w-full px-5 mt-10 flex items-center gap-3 overflow-auto pb-5'>
        {data.tasks.map((e,idx)=>{
            if(e.active){
                return <Active key={idx} data={e} />
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e} />
            }
            if(e.failed){
                return <FailedTask key={idx} data={e} />
            }
            if(e.newTask){
                return <NewTask key={idx} data={e} />
            }
        })}
    </div>
  )
}

export default TaskList
