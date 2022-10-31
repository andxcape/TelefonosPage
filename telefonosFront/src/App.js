import React from "react";
import { Login } from "./components/Login/Login";
import { Registrar } from "./components/Registrar/Registrar";
import { Navbar } from "./components/Navbar/Navbar";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { Home } from "./components/Home/Home";
import { Tabla } from "./components/Tabla/Tabla";
import { TablaUsuario } from "./components/Tabla/TablaUsuario";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from "./context/DataContext";


function App() {
  return (
    <DataProvider>
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<FirstScreen />} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/registro" element={<Registrar/>} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/tabla" element={<Tabla />} exact />
        <Route path="/tablaUsuario" element={<TablaUsuario />} exact />
      </Routes>
    </BrowserRouter>
  </>
  </DataProvider>
  );
}

export default App;
