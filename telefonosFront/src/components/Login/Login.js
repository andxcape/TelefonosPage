import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';


export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Navegacion = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token') != null){
            Navegacion('/home')
        }
    })

    function login() {

        let obj = { email: username, password: password }
        axios.post('http://localhost:3000/api/login', obj).then(({data}) => {
            localStorage.setItem('id',data.objeto._id)
            localStorage.setItem('token', data.token)
            Swal.fire({ icon: 'success', text: 'Inicio de sesión exitoso' }).then(() => {
                Navegacion('/home')
            })

            
        }).catch(({response}) => {
            console.log(response.data)
            Swal.fire({icon: 'error', text: response.data.mensaje})
        })
    }

    return (
        <>
            <form className='formulario'>

                <div className="modal-body">
                <label className="form-label">Email</label>
                    <input name='email' type="email" className="form-control" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                </div>


                <div className="modal-body">
                <label className="form-label">Contraseña</label>
                    <input name='password' type="password" className="form-control"
                        onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    
                </div>

                <br></br>

                <button type="button" disabled={username == '' || password == ''} className="btn btn-danger btn-block mb-4" onClick={login}>Iniciar Sesión</button>


                <div className="text-center">
                    <Link to={'/registro'}>
                        <p>¿No tienes una cuenta? Registrate</p>
                    </Link>

                </div>
            </form>
        </>
    )
}