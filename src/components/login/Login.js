import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <GoogleLogin onSuccess={response => console.log(response)} onError={error => console.log(error)} />
    </div>
  )
}

export default Login