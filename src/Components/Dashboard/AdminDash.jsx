import React, { useContext } from 'react'
import Header from '../SmlCOmp/Header'
import TaskCreate from '../SmlCOmp/TaskCreate'
import TaskDetails from '../SmlCOmp/TaskDetails'
import { AuthContext } from '../../Context/AuthProvider'


function AdminDash() {
  const admin=useContext(AuthContext)
  const adminData=admin.admin[0]
  return (
    <div className='h-screen w-100vh'>
      <Header data={adminData} />
      <TaskCreate />
      <TaskDetails />
    </div>
  )
}

export default AdminDash
