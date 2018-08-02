import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import axios from 'axios';
import celebrate from './celebratePic.png';
import clonify from './clonifyPic.png';

class Portfolio extends Component {
  constructor() {
    super();

    this.state = { 
      projects: []
    }
  }

  componentDidMount() {
    console.log('trying to get projects')
    axios.get('/viewProjects').then(res => {
      this.setState({
        projects: res.data
      })
      console.log('tried to view projects')
    }).catch(err => {console.log(err);})
  }

  render() {
    
    let mappedProjects = this.state.projects.map( (e, i) => {

      return (
        <div key={i} className='project-card'>
            {/* <img src='./celebratePic.png' alt='project' style={{background: 'blue'}}/> */}

            <Link style={{textDecoration: 'none', height: 280, width: 280, background: 'blue'}} to={`/project/${e.id}`}>
              <img src={e.img ? e.img : null} alt='proj' style={{color: 'black'}}/>
              <p className='title'>{e.title}</p>
              <p className='subtitle'>{e.subtitle}</p>
            </Link>

            {console.log(e.img, 'e.img')}
        </div>
      )
    })

    return (
      <div className="portfolio">

        <h1>portfolio</h1>
        
        <div className='projects'>

           {mappedProjects}

        </div>

      </div>
    );
  }
}

export default Portfolio;