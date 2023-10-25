import React from 'react'
import Login from '../components/Login/Login'
import ProtectedRoutes from './ProtectedRoutes'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Exercícios from '../components/Exercicios/Exercicios'

const Routering = () => {
    return ( 
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />          
          <Route path="/home" element={
            <ProtectedRoutes>
              <Home/>
              <Exercícios/>
            </ProtectedRoutes>
          }
          />
        </Routes>
      </Router>
     );
  }
   
  export default Routering;