import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className='projects'>
            <div className='project-card'></div>
        </div>
      </div>
    );
  }
}

export default Portfolio;