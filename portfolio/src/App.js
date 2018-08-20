import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
// import About from './components/About/About';
// import Portfolio from './components/Portfolio/Portfolio';
// import Contact from './components/Contact/Contact';
import routes from './routes';
// import { Link } from 'react-router-dom';
// import tulip from './components/Nav/tulip.png';

class App extends Component {
  render() {
    return (
      <div className="App">

        {routes()}
        <Nav/>
        
      </div>
    );
  }
}

export default App;
