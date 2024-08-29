import React from 'react'
import  Home from "./Components/Home/Home";
import './App.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component= {Home}/>
      </Routes>

    </>
  )
}

export default App
