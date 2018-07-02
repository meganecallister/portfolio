import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './routes';
import { Link } from 'react-router-dom';
import tulip from './components/Nav/tulip.png';

class App extends Component {
  render() {
    return (
      <div className="App">
                    {/* <div className='logo'>
                <Link to='/'><img src={tulip} alt='logo'/></Link> */}
                {/* <Link to='/' style={{textDecoration: 'none'}}><p>megan callister</p></Link>   */}
            {/* </div> */}

        {routes()}
        <Nav/>
      </div>
    );
  }
}

export default App;
