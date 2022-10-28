import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    function logOut(){
        localStorage.clear()
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <div className="container">
                    
                    <Link to={'/'}> <a className="navbar-brand me-2" href="">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3616/3616215.png"
                            height="20"
                            alt="MDB Logo"
                            loading="lazy"
                            style={{marginTop: -1 + "px"}}
                        />
                    </a></Link>

                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'}> <a className="nav-link" href="">Telefonos S.A</a></Link>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-light px-3 me-2">
                                <Link to={'/login'}> Login </Link>
                            </button>
                            <button type="button" className="btn btn-light px-3 me-2">
                                <Link to={'/registro'}> Sign up </Link>
                            </button>
                            <button type="button" className="btn btn-light px-3 me-2" onClick={logOut}>
                                <Link to={'/'}> Logout </Link>
                            </button>
                            <a
                                className="btn btn-dark px-3"
                                href="https://github.com/gperez2018345"
                                role="button"
                            ><i className="fab fa-github">
                            </i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}