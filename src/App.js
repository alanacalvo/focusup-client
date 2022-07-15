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


// import FormUpdateSession from './Components/FormUpdateSession';
// import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';


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
{/* <MainContainer /> */}
      <TimerProvider>
        <Router>
          <Routes>

            <Route path='/' element={<AllSessions sessions={sessions} />}></Route>
            <Route path='/newsession' element={<NewSession getAllSessions={getAllSessions} />}></Route> {/* passing get all sessions to be able to rerender them after the post request. */}
            <Route path='/:id' element={<ViewSession getAllSessions={getAllSessions} sessions={sessions}/>}></Route>
          </Routes>
        </Router>
      </TimerProvider>
{/* <Footer /> */}
    </div>
  );
}

export default App;
