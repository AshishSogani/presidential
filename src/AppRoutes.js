import React, {useEffect, useContext, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Frontend/Home';
import HomeAbout from './Componments/Frontend/Home/HomeAbout';

const AppRoutes = () => {

  return (
    <>
        <Routes>
            <Route exact path="/" Component={Home} />
        </Routes>
    </>
  )
}

export default AppRoutes