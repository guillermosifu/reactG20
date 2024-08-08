import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiGit from "../ApiGit.jsx";
import Contador from "../Contador.jsx"
import Card from "../Card.jsx"
import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import "../index.css"
const Router = () => {
  return (
   <BrowserRouter>
  <Header/>
   <Routes>
    <Route path="/" element={<Contador/>}/>
    <Route path="Git" element={<ApiGit/>}/>
    <Route path="card" element={<Card/>}/>
   </Routes>   
    <Footer/>
   </BrowserRouter>
  )
}

export default Router
