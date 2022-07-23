import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const navigate = useNavigate();

  const [signUp, setSignUp] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setSignUp({ ...signUp, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (signUp.firstName && 
      signUp.lastName && 
      signUp.email && 
      signUp.password === signUp.confirmPassword) {
      axios.post(`${process.env.REACT_APP_BASE_URL}/users`, {
        firstName: signUp.firstName,
        lastName: signUp.lastName,
        email: signUp.email,
        password: signUp.password,
        confirmPassword: signUp.confirmPassword
      })
        .then(res => {
          console.log(res.data)
          console.log(signUp)
          navigate('/home')
        })
    } else {
      console.log('Please fill out all required fields.')
    }
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          onChange={handleChange}
          value={signUp.firstName}
          required/>

        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text" 
          id="lastName" 
          onChange={handleChange}
          value={signUp.lastName}
          required/>

        <label htmlFor="email">Email Address:</label>
        <input 
          type="text" 
          id="email" 
          onChange={handleChange}
          value={signUp.email}
          required/>

        <label htmlFor="password">Password</label>
        <input 
          type='password'
          id="password" 
          onChange={handleChange} 
          value={signUp.password}
          required/>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          type='password'
          id="confirmPassword" 
          onChange={handleChange} 
          value={signUp.confirmPassword}
          required/>

        <button type="submit">Sign Up</button>
      </form>
      <Link to='/'>Back</Link>
      {/* <button
      onClick={() => navigate(-1)}>Back</button> */}
    </div>
  )
}

export default SignUp