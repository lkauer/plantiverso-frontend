import axios from 'axios';
import React, { useState } from 'react';
import Navbar  from '../../../layouts/frontend/Navbar';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import logo from '../../../../public/assets/img/logo.jpeg'
import {Link} from 'react-router-dom';

function Login(){

    const history = useHistory();

    const [loginInput, setLogin] = useState({
        email : '',
        password : '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name] : e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email : loginInput.email,
            password : loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token' , res.data.token);
                    localStorage.setItem('auth_name' , res.data.username);
                    swal('Success', res.data.message, 'success');
                    history.push('/admin/feed');
                }else if(res.data.status === 401){
                    swal('Warning', res.data.message, 'warning');
                }else{
                    setLogin({ ...loginInput, error_list : res.data.validation_errors});
                }
            });
        });
    }

    if(localStorage.getItem('auth_token')){
        history.push('/admin/feed');
    }

    return(
        <div>
        <Navbar/>
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Acesso</h4>
                            <Link to="/" className="navbar-brand ps-3"><img src={logo} className="rounded-circle text-center" style={{width:"100px", height: "auto"}}/></Link>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
                                <div className="form-group mb-3">
                                    <label>E-mail</label>
                                    <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control"></input>
                                    <span> {loginInput.error_list.email} </span>
                                </div>
                                <div className="form-group mb-3">
                                    <label >Password</label>
                                    <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control"></input>
                                    <span> {loginInput.error_list.password} </span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary"> Login </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;