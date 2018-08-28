import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';

class Projects extends Component {
  constructor() {
    super();

    // this.state = { 
    //   projects: []
    // }
  }

//   componentDidMount() {
//     console.log('trying to get projects')
//     axios.get('/viewProjects').then(res => {
//       this.setState({
//         projects: res.data
//       })
//       console.log('tried to view projects')
//     }).catch(err => {console.log(err);})
//   }

  render() {
    
    // let mappedProjects = this.state.projects.map( (e, i) => {

    //   return (
    //     <div key={i}>  

    //       <Link style={{textDecoration: 'none'}} to={`/project/${e.title}`}>
    //         <div className='project-card'>
    //           <img src={e.img} alt={e.img} style={{color: 'black'}}/>
    //           <p className='title'>{e.title}</p>
    //           <p className='subtitle'>{e.subtitle}</p>
    //         </div>
    //       </Link>
    //     </div>
    //   )
    // })

    return (
      <div className="projects">

            <Nav/>

        <div className='projects-page'>

            <div className='left-margin'>
            </div>

            <div className='main'>
                {/* {mappedProjects} */}
            </div>

            <div className='right-margin'>
            </div>

        </div>

      </div>
    );
  }
}

export default Projects;