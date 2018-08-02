import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// import tulip from './tulip.svg';
import tulip from './tulip.png';
import m from './m.png';
import HAM from './HAM.png';

function Nav() {
    return(
        <div className='nav'>

            <div className='menu'>
                <Link to='/'>
                {/* <h1 style={{textDecoration: 'none', color: 'white'}}>m</h1> */}
                {/* <img src={tulip} alt='logo'/> */}
                <img src={m} alt='logo' className='m'/>
                </Link>
                <Link to='/about' style={{textDecoration: 'none', color: 'white'}}><p>ABOUT</p></Link>
                <p>|</p>           
                <Link to='/portfolio' style={{textDecoration: 'none', color: 'white'}}><p>PORTFOLIO</p></Link>
                <p>|</p>
                <Link to='/contact' style={{textDecoration: 'none',  color: 'white'}}><p>CONTACT</p></Link>
                <img className="HAM" src={HAM}/>
            </div>
        </div>
    )
}

export default Nav;