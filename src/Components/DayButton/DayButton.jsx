import React, { useState } from 'react'
import axios from 'axios'
import './DayButton.scss'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css';
import { useEffect } from 'react'
import Sun from '../MySessionsModals/SundayModal/Sun'
import Mon from '../MySessionsModals/MondayModal/Mon'
import Tues from '../MySessionsModals/TuesdayModal/Tues'
import Wed from '../MySessionsModals/WednesdayModal/Wed'
import Thurs from '../MySessionsModals/ThursdayModal/Thurs'
import Fri from '../MySessionsModals/FridayModal/Fri'
import Sat from '../MySessionsModals/SaturdayModal/Sat'

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
      console.log(sessions[i].day)
      let myNewDay = new Date((sessions[i].day));
      if (myNewDay.getDay() === 0) {
        const sunCopy = sun;
        sunCopy.push(sessions[i])
        setSun(sunCopy)
      } 
      if (myNewDay.getDay() === 1) {
        const monCopy = mon;
        monCopy.push(sessions[i])
        setMon(monCopy)
      }
      if (myNewDay.getDay() === 2) {
        const tuesCopy = tues;
        tuesCopy.push(sessions[i])
        setTues(tuesCopy)
      }
      if (myNewDay.getDay() === 3) {
        const wedCopy = wed;
        wedCopy.push(sessions[i])
        setWed(wedCopy)
        console.log(wed, 'wed')
      }
      if (myNewDay.getDay() === 4) {
        const thursCopy = thurs;
        thursCopy.push(sessions[i])
        setThurs(thursCopy)
      }
      if (myNewDay.getDay() === 5) {
        const friCopy = fri;
        friCopy.push(sessions[i])
        setFri(friCopy)
      }
      if (myNewDay.getDay() === 6) {
        const satCopy = sat;
        satCopy.push(sessions[i])
        setSat(satCopy)
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

return (
  <div className='DayButtonContainer'>
    <h2>My Sessions</h2>
    <div className='InnerBtnContainer'>

  {/* <CalendarHeatmap 
    startDate={new Date('2022-04-01')}
    endDate={new Date('2012-06-01')}
    values={[
      { date: '2016-01-01', count: 12 },
      { date: '2016-01-22', count: 122 },
      { date: '2016-01-30', count: 38 },
    ]}
    horizontal={true}
  /> */}

   {openModal && <Sun closeModal={setOpenModal} sun={sun}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Sunday</p>
      </button>

      {openModal && <Mon closeModal={setOpenModal} mon={mon}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Monday</p>
      </button>

      {openModal && <Tues closeModal={setOpenModal} tues={tues}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Tuesday</p>
      </button>

      {openModal && <Wed closeModal={setOpenModal} wed={wed}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Wednesday</p>
      </button>

      {openModal && <Thurs closeModal={setOpenModal} thurs={thurs}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Thursday</p>
      </button>     

      {openModal && <Fri closeModal={setOpenModal} fri={fri}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Friday</p>
      </button>      

      {openModal && <Sat closeModal={setOpenModal} sat={sat}/>} 
      <button 
        className='dayButton' 
        onClick={() => {
          setOpenModal(true);
          getDayValue();}}>
        <p>Saturday</p>
      </button> 
    </div>
  </div>
)
}

export default DayButton