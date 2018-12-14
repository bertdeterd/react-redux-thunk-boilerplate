import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home';


class App extends Component {
  
  render = () => {
    return (
      
      <Router>
        <div >
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
     
    );
  }
}

export default App;
