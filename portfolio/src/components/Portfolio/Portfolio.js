import React, { Component } from 'react';
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
      // return (
      //   <div key={i} className='project-card'>

      //     <img src='./celebratePic.png' alt='project' style={{background: 'blue'}}/>
      //     {/* <img src={e.img} alt='project '/> */}

      //     <p className='title'>{e.title}</p>
      //     <p className='subtitle'>{e.subtitle}</p>

      //   </div>
      // )
    })

    return (
      <div className="portfolio">

        <h1>portfolio</h1>
        
        <div className='projects'>

           {mappedProjects}

           <div className='project-card'>
            <img src={celebrate} alt='project'/>
            <p className='title'>Celebrate</p>
            <p className='subtitle'>the celebrate app</p>
          </div>

          <div className='project-card'>
            <div className='img-background'>
              <img src={clonify} alt='project'/>
            </div>
            <p className='title'>Spotify</p>
            <p className='subtitle'>the spotify app</p>
          </div>

        </div>

      </div>
    );
  }
}

export default Portfolio;