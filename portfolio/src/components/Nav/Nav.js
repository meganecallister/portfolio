import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// import tulip from './tulip.svg';
import tulip from './tulip.png';

function Nav() {
    return(
        <div className='nav'>

            {/* <div className='logo'>
                <Link to='/'><img src={tulip} alt='logo'/></Link>
                <Link to='/' style={{textDecoration: 'none'}}><h1>MEGAN CALLISTER</h1></Link>  
            </div> */}

            <div className='menu'>
                <Link to='/'><img src={tulip} alt='logo'/></Link>
                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}><p>ABOUT</p></Link>
                <p>|</p>           
                <Link to='/portfolio' style={{textDecoration: 'none', color: 'white'}}><p>PORTFOLIO</p></Link>
                <p>|</p>
                <Link to='/contact' style={{textDecoration: 'none',  color: 'white'}}><p>CONTACT</p></Link>
            </div>
        </div>
    )
}

export default Nav;