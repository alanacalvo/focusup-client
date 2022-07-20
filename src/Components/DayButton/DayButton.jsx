import React, { useState } from 'react'
import axios from 'axios'
import './DayButton.scss'
import { useEffect } from 'react'
import Wed from '../MySessionsModals/WednesdayModal/Wed'

function DayButton({ sessions }) {
console.log(sessions)

  const [openModal, setOpenModal] = useState(false)
  const [sun, setSun] = useState([])
  const [mon, setMon] = useState([])
  const [tues, setTues] = useState([])
  const [wed, setWed] = useState([])
  const [thurs, setThurs] = useState([])
  const [fri, setFri] = useState([])
  const [sat, setSat] = useState([])

const getDayValue = () => {
  for (let i = 0; i < sessions.length; i++) {
    let dayArr = []
    dayArr.push((sessions[i].day))

    for (let j = 0; j < dayArr.length; j++) {
      let daysOfWeek = []
      let myNewDay = new Date(dayArr[j]);
      daysOfWeek.push(myNewDay.getDay())
      if (myNewDay.getDay() === 0) {
        setSun(sessions[i])
      } else if (myNewDay.getDay() === 1) {
        setMon(sessions[i])
      } else if (myNewDay.getDay() === 2) {
        setTues(sessions[i])
      } else if (myNewDay.getDay() === 3) {
        setWed(sessions[i])
      } else if (myNewDay.getDay() === 4) {
        setThurs(sessions[i])
      } else if (myNewDay.getDay() === 5) {
        setFri(sessions[i])
      } else if (myNewDay.getDay() === 6) {
        setSat(sessions[i])
      }
      console.log('sunday', sun)
      console.log('monday', mon)
      console.log('tuesday', tues)
      console.log('wed', wed)
      console.log('thursday', thurs)
      console.log('friday', fri)
      console.log('saturday', sat)
    }
  }
}
// useEffect(()=>{
//   getDayValue();
// },[])


return (
  <div className='DayButtonContainer'>
    <h2>My Sessions</h2>
    <div className='InnerBtnContainer'>

      <button className='dayButton'>Sunday</button>

      <button className='dayButton'>Monday</button>
      <button className='dayButton'>Tuesday</button>

      {openModal && <Wed closeModal={setOpenModal} wed={[wed]}/>} 
      <button 
        className='dayButton' 
        onClick={event => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Wednesday</p>
      </button>

      <button className='dayButton'>Thursday</button>
      <button className='dayButton'>Friday</button>
      <button className='dayButton'>Saturday</button>
    </div>
  </div>
)
}

export default DayButton