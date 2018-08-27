import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className='block' id='top-left'></div>

        <Link to='/'><div className='block' id='logo-block'>
            <p>LOGO!</p>
        </div></Link>

        <div className='block' id='top-right'></div>

        <Link to='/about' style={{textDecoration: 'none', margin: 0, width: '33.33%', position: 'relative'}}><div className='block' id='about-block'>
            <p>ABOUT!</p>
        </div></Link>

        <div className='block' id='center'></div>

        <div className='block' id='projects-block'>
            <p className='projects-label'>PROJECTS!</p>
        </div>

        <div className='block' id='bottom-left'></div>

        <div className='block' id='contact-block'>
            <p>CONTACT!</p>
        </div>

        <div className='block' id='bottom-right'></div>
      
      </div>
    );
  }
}

export default Home;
