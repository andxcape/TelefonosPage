import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './registrar.css';


export const Registrar = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navegacion = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') != null){
      Navegacion('/home')
    }
  })



  function register() {
      let obj = { nombre: name, email: email, password: password }
      axios.post('http://localhost:3000/api/registrarUsuario', obj).then((response) => {
        Swal.fire({icon:'success', text:'Cuenta creada exitosamente'}).then(()=>{
          Navegacion('/login')
        })
          console.log(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }

  return (
    <>
      <form className='formulario'>

        <div className="modal-body">
        <label className="form-label" htmlFor="form2Example2">Nombre</label>
          <input type="text"  className="form-control" onChange={(e) => { setName(e.target.value) }} value={name}/>
          
          
        </div>

        <div className="modal-body">
        <label className="form-label">Email</label>
          <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }} value={email}/>
          
        </div>

        <div className="modal-body">
        <label className="form-label">Constraseña</label>
          <input type="password" className="form-control" onChange={(e) => { setPassword(e.target.value) }} value={password}/>
          
        </div>

        <br></br>

        <button type="button" className="btn btn-danger btn-block mb-4" onClick={register}>Registrarse</button>


        <div className="text-center">

          <Link to={'/login'}>
            <p>Tienes una cuenta?Inicia Sesión</p>
          </Link>
        </div>
      </form>
    </>
  )
}