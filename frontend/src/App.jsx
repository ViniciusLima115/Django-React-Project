import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'


function Logout() {
  localStorage.clear()
  return <Navigate to= "/login"/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register/>
}


function App() {
  return(
    <BrowserRouter>
      <Routes>

        <Route 
        path="/" 
        element={
          <ProtectedRoute> // nao pode acessar a home sem estar logado!
            <Home/>
          </ProtectedRoute>
        } />
        <Route path="/login" element = {<Login/>}/>
        <Route path="/logout" element = {<Logout/>}/>
        <Route path="/register" element = {<RegisterAndLogout/>}/>
        <Route path="*" element = {<NotFound/>}/>
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App