import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import MainLayout from './layouts/admin/MainLayout';

function AdminPrivateRoute({...rest}){

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);
    const history = useHistory();
    
    useEffect(() => {
        
        axios.get(`/api/checkingAuthenticated`).then(res => {
            if(res.status === 200){
                setAuthenticated(true);
            }
            setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };

    }, []);

    axios.interceptors.response.use(
        undefined,function axiosRetryInterceptor(err){
            if(err.response.status === 401){
                swal('Unauthorized', err.response.data.message, 'warning');
                history.push('/');
            }
            return Promise.reject(err);
        }
    );

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <Route {...rest} 
            render={ ({props, location}) =>
                Authenticated ?
                (<MainLayout {...props} />) : 
                ( <Redirect to={{pathname: '/login', state: {from : location}}}/> )

            }
        />
    );
}

export default AdminPrivateRoute;