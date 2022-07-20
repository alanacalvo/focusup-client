import React from 'react'
import './NavDrawer.scss'

function NavDrawer() {
  return (
    <nav className='navDrawerContainer'>
      <a href='/account'>Account</a>
      <a href='/settings'>Settings</a>
      <a href='/connect'>Connect</a>
      <a href='/mealplan'>Meal Plan</a>
    </nav>
  )
}

export default NavDrawer