import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage } from '../Utils/LocalStorage'

export const AuthContext=createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
    getlocalstorage()
    const {employee,admin}=getlocalstorage()
    setUserData({employee,admin})
    }, [])
    
    

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
