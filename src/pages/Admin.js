import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuth }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const signInWithEmail = () => {
    if (
      email === process.env.REACT_APP_ADMIN_USERNAME &&
      pass === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      localStorage.setItem('adminAuth', true)
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    } else {
      window.alert('Wrong Credientials!')
    }
  }

  return (
    <div className='loginPage'>
      <form className='adm-form'>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type='password'
          placeholder='Password'
        />
      </form>
      <button className='admin-login' onClick={signInWithEmail}>
        Login
      </button>
    </div>
  )
}

export default Login
