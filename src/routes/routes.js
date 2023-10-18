import React from 'react'
import Login from '../components/Login/Login'
import ProtectedRoutes from './ProtectedRoutes'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'

const Routering = () => {
    return ( 
      <Router>
        <Routes>
          <Route path="*" element={<Login/>} />          
          <Route path="/home" element={<Home/>}
          />
        </Routes>
      </Router>
     );
  }
   
  export default Routering;