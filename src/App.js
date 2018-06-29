import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Header from './components/Header'
import routes from './routes/routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
