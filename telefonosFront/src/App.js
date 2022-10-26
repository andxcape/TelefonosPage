import React from "react";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Registrar } from "./components/Registrar/Registrar";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/registro" element={<Registrar/>} exact />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
