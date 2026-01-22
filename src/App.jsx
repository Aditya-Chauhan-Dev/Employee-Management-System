import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/login'
import Emp from './Components/Dashboard/Emp'
import AdminDash from './Components/Dashboard/AdminDash'
import { getlocalstorage, setlocalstorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [logInUser, setLogInUser] = useState(null)
  useEffect(() => {
    setlocalstorage()
  }, [])
  
  const authData=useContext(AuthContext)

   const handler=(email,password)=>{
    if(authData.admin.find((e)=>email==e.email&& e.password==password)){
      setUser("admin") 
    }
    else if(authData){
      const emp=authData.employee.find((e)=>email==e.email&& e.password==password)
      if(emp){
        setUser("user")
        setLogInUser(emp)
      }
      
    }
    else{alert("invalid")}
   }

   if(!user){
    return (<Login handler={handler} />)
   }
   

  return (
    <>
    {user=="admin"&&<AdminDash />}
    {user=="user"&&<Emp data={logInUser} />}
    </>
  )
}

export default App
