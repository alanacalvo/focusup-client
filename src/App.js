import * as React from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import ViewSession from './views/ViewSession/ViewSession'
import { TimerProvider } from './Context/TimerContext';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.scss'
import MainPage from './views/MainPage/MainPage';
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import StartSessionButton from './Components/StartSessionButton/StartSessionButton'
import Footer from './Components/Footer/Footer'
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import LandingPage from './views/LandingPage/LandingPage';
import NavDrawer from './Components/NavDrawer/NavDrawer';

function App() {
  const [loginUser,setLoginUser] = useState({
    email: '',
    password: ''
  })
  const [sessions, setSessions] = useState([]);

  const getAllSessions = async () => {
    const { data } = await axios.get('http://localhost:5000/sessions');
    setSessions(data);
  }
  useEffect(() => {
    getAllSessions()
    console.log(sessions)
  }, []);

  return (
    <div className="App">

    <Header />
    {/* <NavDrawer /> */}
      <TimerProvider>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            {/* <Route path='/home' 
            element={!loginUser ? <Navigate to="/login" />: <MainPage />}> 
            </Route> */}
            
            <Route path='/home' element={<MainPage getAllSessions={getAllSessions} sessions={sessions} />}></Route>
            <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions} sessions={sessions} />}></Route>
            <Route path='/login' element={<Login setLoginUser={setLoginUser} loginUser={loginUser} getAllSessions={getAllSessions} sessions={sessions} />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </Router>
      </TimerProvider>

    {/* <Footer /> */}
    </div>
  );
}

export default App;
