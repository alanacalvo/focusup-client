import React from 'react'
import Header from '../Header/Header'
import StartSessionButton from '../StartSessionButton/StartSessionButton'
import Footer from '../Footer/Footer'

export default (props) => (
  <div className='container'>
    <Header />
    {/* <Nav/> */}
    <hr/>
    <main>
      {props.children}
    </main>
    <StartSessionButton />
    <Footer />
  </div>
)