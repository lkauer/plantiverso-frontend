import React , { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/frontend/Home';
import MainLayout from './layouts/admin/MainLayout'
import Login from './components/frontend/auth/Login'
import Register from './components/frontend/auth/Register'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/admin" name="Admin" render={(props) => <MainLayout {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
