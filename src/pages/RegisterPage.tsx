import SignIn from 'components/SignIn'
import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
        <h1>Register</h1>
        <SignIn/>
        <p>Already have an accaunt? <Link to='/login'>Sign in</Link></p>
    </div>
  )
}

export default RegisterPage