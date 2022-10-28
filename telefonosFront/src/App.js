import React from "react";
import { Login } from "./components/Login/Login";
import { Registrar } from "./components/Registrar/Registrar";
import { Navbar } from "./components/Navbar/Navbar";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { Home } from "./components/Home/Home";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<FirstScreen />} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/registro" element={<Registrar/>} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
