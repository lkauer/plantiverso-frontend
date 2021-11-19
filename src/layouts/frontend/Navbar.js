import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    
    return(
            <nav className="navbar navbar-expand-lg navbar-dark shadow stick-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary" to="/login">Login</Link>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;