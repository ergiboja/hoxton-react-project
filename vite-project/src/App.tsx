import { useState } from 'react'
import { BrowserRouter as Router, Route,} from "react-router-dom";
import {Routes} from "react-router-dom"


import logo from './logo.svg'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home';
import Header from './header';




import './App.css'

function App() {
  

  return (
    <>
 
  
    
   <Routes>
   
     <Route path='/' element={Login()}/>
      
      <Route path='/register' element={Register()}/>
     
      <Route path='home' element={Home()}/>

      
      </Routes>
      </>
      
     
     
      
     
    
   
  )
}

export default App
