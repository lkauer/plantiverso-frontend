import axios from 'axios';
import React, { useState } from 'react';
import Navbar  from '../../../layouts/frontend/Navbar';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import logo from '../../../../public/assets/img/logo.jpeg'
import {Link} from 'react-router-dom';

function Register(){

    const history = useHistory();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list : [],     
    }); 

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [ e.target.name]: e.target.value});
    }

    const registerInputSubmit = (e) => {
        e.preventDefault();

        const data = {
            name:registerInput.name,
            email:registerInput.email,
            password:registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token' , res.data.token);
                    localStorage.setItem('auth_name' , res.data.username);
                    swal('Success', res.data.message, 'success');
                    history.push('/admin/feed');
                }else{
                    setRegister({ ...registerInput, error_list : res.data.validation_errors});
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
                            <h4>Cadastro</h4>
                            <Link to="/" className="navbar-brand ps-3"><img src={logo} className="rounded-circle text-center" alt="logotipo" style={{width:"100px", height: "auto"}}/></Link>
                        </div>
                        <div className="card-body">
                            <form onSubmit={registerInputSubmit}>
                                <div className="form-group mb-3">
                                    <label>User Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control"></input>
                                    <span> {registerInput.error_list.name} </span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control"></input>
                                    <span> {registerInput.error_list.password} </span>
                                </div>
                                <div className="form-group mb-3">
                                    <label>E-mail</label>
                                    <input type="text" name="email" onChange={handleInput} value={registerInput.email} className="form-control"></input>
                                    <span> {registerInput.error_list.email} </span>
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className="btn btn-primary"> Register </button>
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

export default Register;