import React, { Component } from 'react';
import './Home.css';
import tulip from '../Nav/tulip.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className='splash'>
          <h1>megan callister</h1>
          <p>WEB DEVELOPER</p>        
        </div>
      </div>
    );
  }
}

export default Home;