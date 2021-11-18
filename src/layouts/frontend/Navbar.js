import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Navbar(){
    
    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/logout`).then( res =>{
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal('Success', res.data.message, 'success');
                history.push('/');
            }else if(res.data.status === 401){

            }else{

            }
        });
    };

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token')){
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-secondary" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-secondary" to="/login">Login</Link>
                </li>
            </ul>
        )
    }else{
        AuthButtons = (
            <li className="nav-item">
                <button onClick={logoutSubmit} type="button" className="nav-link btn btn-danger btn-sm text-white" to="">Logout</button>
            </li>
        );
    }

    return(
            <nav className="navbar navbar-expand-lg navbar-dark shadow stick-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {AuthButtons}
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;