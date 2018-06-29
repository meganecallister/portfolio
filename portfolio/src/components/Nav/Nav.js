import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
// import tulip from './tulip.svg';
import tulip from './tulip.png';

function Nav() {
    return(
        <div className='nav'>

            <div className='logo' style={{textDecoration: 'none'}}>
                <Link to='/'><img src={tulip} alt='logo'/></Link>
                <Link to='/'><h1>MEGAN CALLISTER</h1></Link>  
            </div>

            <div className='menu'>
                <Link to='/portfolio'><button>Portfolio</button></Link>
                <Link to='/about'><button>About</button></Link>
                <Link to='/contact'><button>Contact</button></Link>
            </div>
        </div>
    )
}

export default Nav;