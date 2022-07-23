import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AllSessions from '../../Components/AllSessions/AllSessions';

function Login({ loginUser, setLoginUser, sessions, getAllSessions }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.email && user.password)
      axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, user)
        .then(res => {
          console.log(res.data)
          console.log(user)
          setLoginUser(res.data.user)
          localStorage.setItem('user', JSON.stringify(res.data.user))
          console.log(loginUser)
          navigate('/home')
        })
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email"
          onChange={handleChange}
          value={user.email}
          required />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={user.password}
          required />

        <button type="submit">Login</button>
      </form>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/'>Back</Link>
      {/* <button
      onClick={() => navigate(-1)}>Back</button> */}
      {/* <AllSessions getAllSessions={getAllSessions} sessions={sessions}/> */}
    </div>
  )
}

export default Login