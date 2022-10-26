import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';


export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        let obj = { email: username, password: password }
        axios.post('http://localhost:3000/api/login', obj).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <form className='formulario'>

                <div className="form-outline mb-4">
                    <input name='email' type="email" id="form2Example1" className="form-control" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                    <label className="form-label" htmlFor="form2Example1">Email</label>
                </div>


                <div className="form-outline mb-4">
                    <input name='password' type="password" id="form2Example2" className="form-control"
                        onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    <label className="form-label" htmlFor="form2Example2">Contraseña</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4" onClick={login}>Iniciar Sesión</button>


                <div className="text-center">
                    <Link to={'/registro'}>
                    <p>No tienes una cuenta? <a href="#!">Registrate</a></p>
                    </Link>
                    
                </div>
            </form>
        </>
    )
}