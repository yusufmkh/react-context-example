import React, { useState, createContext } from 'react'

export const AuthContext = createContext()

function AuthContextProvider(props) {
  const [auth, setAuth] = useState({
    isAuthenticated: false
  })

  const toggleAuth = () => {
    setAuth({
      ...auth,
      isAuthenticated: !auth.isAuthenticated
    })
  }

  return (
    <AuthContext.Provider value={{ ...auth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
