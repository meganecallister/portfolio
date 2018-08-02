import React, { Component } from 'react';
import './Home.css';
import tulip from '../Nav/tulip.png';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import poppy from './poppy.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className='image'></div>
        {/* <img src={poppy} alt='poppy in white flower field'/> */}
        
 

        <div className='splash'>
          <h1>megan callister</h1>
        <p>FULL-STACK WEB DEVELOPER</p>           
        </div>
        
      </div>
    );
  }
}

export default Home;