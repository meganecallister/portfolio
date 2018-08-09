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
        <div key={i}>  
          <Link style={{textDecoration: 'none'}} to={`/project/${e.id}`}>
            <div className='project-card'>
              <img src={e.img} alt='proj' style={{color: 'black'}}/>
              <p className='title'>{e.title}</p>
              <p className='subtitle'>{e.subtitle}</p>
            </div>
          </Link>
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