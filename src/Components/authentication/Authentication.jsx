import React, { useState } from 'react'
import Login from './Login'
import Me from '../me/me'
import { useIsLogin, useToken } from '../../store/AuthContext'
function Authentication() {
  const login = useIsLogin()
  console.log(login);
  // const token = useToken()
  console.log(Login)
  return (
    <>
    <hr />

  {/* {login && <Me></Me> || !login && <Login/>} */}
  <Me></Me>
  
    </>
    
  )
}

export default Authentication