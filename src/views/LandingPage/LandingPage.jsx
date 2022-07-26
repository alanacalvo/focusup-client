import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'

function LandingPage() {

  return (
    <div className='landingContainer'>
      <div className='innerLanding'>

      <h1>Welcome to ADHDHub</h1>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default LandingPage