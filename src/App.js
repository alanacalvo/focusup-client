import './assets/App.css';
import * as React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AllSessions from './views/AllSessions';
import NewSession from './Components/NewSession';
import ViewSession from './views/ViewSession'
import { TimerProvider } from './Context/TimerContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
// import styled from 'styled-components';
// import Grid from './Components/Layout/Grid'
// import FullWidth from './Components/Layout/FullWidth'
// import MaxWidth from './Components/Layout/MaxWidth'
// import Row from './Components/Layout/Row'

function App() {
  const [sessions, setSessions] = useState([]);

  const getAllSessions = async () => {
    const { data } = await axios.get('http://localhost:5000/');
    setSessions(data);
  }
  useEffect(() => {
    getAllSessions()
    console.log(sessions)
  }, [sessions]);

  return (
    <div className="App">
      <Header />
      <TimerProvider>
        <Router>
          <Routes>
            <Route path='/' element={<AllSessions sessions={sessions} />}></Route>
            <Route path='/newsession' element={<NewSession />}></Route>
            <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions} sessions={sessions} />}></Route>
          </Routes>
        </Router>
      </TimerProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
