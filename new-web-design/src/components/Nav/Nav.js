import React from 'react';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';

function Nav() {
    return(
        <div className='nav'>

            <div className='logo-block'>
                <Link to='/' style={{textDecoration: 'none'}}>
                <p className='name'>megan callister</p>
                <p className='profession'>WEB DEVELOPER</p>
                </Link>
            </div>

            <div className='menu'>

                <NavLink to='/about' activeStyle={{color: 'black', borderBottom: '1px solid black'}} style={{height: '40px', textDecoration: 'none', color: '#585858'}}>
                <p>ABOUT</p>
                </NavLink>

                <h4 className='break'>•</h4> 

                <NavLink to='/projects' activeStyle={{color: 'black', borderBottom: '1px solid black'}} style={{height: '40px', textDecoration: 'none', color: '#585858'}}>
                <p>PROJECTS</p>
                </NavLink>

                <h4 className='break'>•</h4>

                <NavLink to='/contact' activeStyle={{color: 'black', borderBottom: '1px solid black'}} style={{height: '40px', textDecoration: 'none', color: '#585858'}}>
                <p>CONTACT</p>
                </NavLink>
                
            </div>
            
        </div>
    )
}

export default Nav;