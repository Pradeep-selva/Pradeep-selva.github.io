import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Home from '../Home/index'
import Projects from '../Projects/index'
import About from '../About/index'
import Foot from '../Footer/index'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-class">
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path="/About" component={About} />
          </div>
        </Router>
        <Foot />
      </div>
    );
  }
}

export default App;
