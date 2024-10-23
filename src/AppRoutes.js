import React, {useEffect, useContext, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Frontend/Home';

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