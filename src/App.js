import './assets/App.css';
import { Routes, Route } from 'react-router-dom';
import AllSessions from './views/AllSessions';
import NewSession from './Components/NewSession';
import ViewSession from './views/ViewSession'
import CountdownTimer from './Components/CountdownTimer';
import { TimerProvider } from './Context/TimerContext';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [sessions, setSessions] = useState([]);

  const getAllSessions = async () => {
    const { data } = await axios.get('http://localhost:5000/');
    setSessions(data);
  }
  useEffect(() => {
    getAllSessions()
    console.log(sessions)
  }, []);

  return (
    <div className="App">
      <TimerProvider>
      <NewSession  getAllSessions={getAllSessions}/> {/* passing get all sessions to be able to rerender them after the post request. */}
      {/* <CountdownTimer /> */}
      <Routes>
        <Route path='/' element={<AllSessions sessions={sessions}/>}></Route>
        <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions}/>}></Route>
      </Routes>
      </TimerProvider>
    </div>
  );
}

export default App;
