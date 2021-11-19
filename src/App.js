import React , { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import AdminPrivateRoute from './AdminPrivateRoute';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.baseURL = 'https://plantiverso-backend-2ylj3.ondigitalocean.app'

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            {/* <Route path="/login" component={Login}/> */}
            {/* <Route path="/register" component={Register}/> */}
            <Route path="/login">
                {localStorage.getItem('auth_token') ? <Redirect to='/'/> : <Login/>}
            </Route>
            <Route path="/register">
                {localStorage.getItem('auth_token') ? <Redirect to='/'/> : <Register/>}
            </Route>
            <AdminPrivateRoute path="/admin" name="Admin" />
            {/* <Route path="/admin" name="Admin" render={(props) => <MainLayout {...props} />} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
