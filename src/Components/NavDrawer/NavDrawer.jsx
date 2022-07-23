import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavDrawer.scss'

function NavDrawer({ onLogout }) {
const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('user')
    onLogout()
    navigate('/')
  }
  return (
    <nav className='navDrawerContainer'>
      <a href='/account'>Account</a>
      <a href='/settings'>Settings</a>
      <a href='/connect'>Connect</a>
      <a href='/mealplan'>Meal Plan</a>
      <button
      onClick={logOut}
      >Log out</button>
    </nav>
  )
}

export default NavDrawer