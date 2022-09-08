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
  const [loginUser,setLoginUser] = useState(null)
  const [sessions, setSessions] = useState([]);

  const getAllSessions = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/sessions`);
    setSessions(data);
  }
  useEffect(() => {
    getAllSessions()
    console.log(sessions)
  }, []);

  useEffect(() => {
    const userJSON = localStorage.getItem('user')
    console.log(userJSON)
    if (userJSON) {
      const user = JSON.parse(userJSON)
      setLoginUser(user)
    }
  },[])

  return (
    <div className="App">

    <Header />
    {/* <NavDrawer /> */}
      <TimerProvider>
        <Router>
          <Routes>
            {/* <Route path='/' element={<LandingPage />}></Route> */}
            {/* <Route path='/home' 
            element={!loginUser ? <Navigate to="/login" /> : <MainPage onLogout={() => {setLoginUser(null)}} getAllSessions={getAllSessions} sessions={sessions}/>}> 
            </Route> */}
            
            <Route path='/' element={<MainPage getAllSessions={getAllSessions} sessions={sessions} />}></Route>
            <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions} sessions={sessions} />}></Route>
            
            <Route path='/login' element={loginUser ? <Navigate to='/home' /> : <Login setLoginUser={setLoginUser} loginUser={loginUser}/>}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
          </Routes>
        </Router>
      </TimerProvider>

    {/* <Footer /> */}
    </div>
  );
}

export default App;
