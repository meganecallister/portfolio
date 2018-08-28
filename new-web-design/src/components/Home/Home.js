import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className='block' id='top-left'>
            <div className='mini-block' style={{background: '#8a8a8a'}}></div>
            <div className='mini-block' style={{background: '#92DDDB'}}></div>
            <div className='mini-block' style={{background: '#FCDD71'}}></div>
            <div className='mini-block' style={{background: '#e0e0e0'}}></div>
        </div>

        <div className='block' id='logo-block'>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
            <p className='name'>megan callister</p>
            <p className='profession'>WEB DEVELOPER</p>
            </Link>
        </div>

        <div className='block' id='top'></div>

        <div className='block' id='top-right'>
            <div className='mini-block' style={{background: '#FCDD71'}}></div>
            <div className='mini-block' style={{background: '#e0e0e0'}}></div>
            <div className='mini-block' style={{background: 'white'}}></div>
            <div className='mini-block' style={{background: '#92DDDB'}}></div>
        </div>

        <div className='block' id='about-block'>
            <Link to='/about' style={{textDecoration: 'none', color: 'white'}}><p className='about-label'>ABOUT</p></Link>
        </div>

        <div className='block' id='center' style={{background: '#e0e0e0'}}></div>

        <div className='block' id='bottom-left'>
            <div className='mini-block' style={{background: '#FCDD71'}}></div>
            <div className='mini-block' style={{background: '#8a8a8a'}}></div>
            <div className='mini-block' style={{background: 'white'}}></div>
            <div className='mini-block' style={{background: '#92DDDB'}}></div>
        </div>

        <div className='block' id='projects-block'>
            <Link to='/projects' style={{textDecoration: 'none', color: 'white'}}><p className='projects-label'>PROJECTS</p></Link>
        </div>

        <div className='block' id='bottom-left'></div>

        <div className='block'>
            <div className='mini-block' style={{background: 'white'}}></div>
            <div className='mini-block' style={{background: '#8a8a8a'}}></div>
            <div className='mini-block' style={{background: '#92DDDB'}}></div>
            <div className='mini-block' style={{background: '#e0e0e0'}}></div>
        </div>        

        <div className='block' id='contact-block'>
            <Link to='/contact' style={{textDecoration: 'none', color: 'white'}}><p className='contact-label'>CONTACT</p></Link>
        </div>

        <div className='block' id='bottom-right'></div>

      </div>
    );
  }
}

export default Home;
