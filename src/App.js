import * as React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ViewSession from './views/ViewSession/ViewSession'
import { TimerProvider } from './Context/TimerContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'
import MainPage from './views/MainPage/MainPage';
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import StartSessionButton from './Components/StartSessionButton/StartSessionButton'
import Footer from './Components/Footer/Footer'

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
    <Header />
      <TimerProvider>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage sessions={sessions}/>}></Route>
            <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions} sessions={sessions} />}></Route>
          </Routes>
        </Router>
      </TimerProvider>
      <StartSessionButton />
    <Footer />
    </div>
  );
}

export default App;
