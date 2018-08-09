import React, { Component } from 'react';
import axios from 'axios';
import './Project.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project_id: props.match.params.id,
            project_data: []
        }
    }

    componentDidMount() {
        console.log(this.state.project_id)

        axios.get(`/api/project_data/${this.state.project_id}`)
        .then(res => {
            this.setState({
                project_data: res.data
            })
        })
    }

    render() {
        let projectData = this.state.project_data.map((e, i) => {
            return (
                <div key={i}>

                    <div className='left-side'>

                        <div className='title-subtitle'>
                            <p className='title'>{e.title}</p>
                            <p className='subtitle'>{e.subtitle}</p>
                        </div>

                        <div className='three-pics'>
                            <img src={e.img} alt='picture' className='circle'/>
                            <img src={e.img} alt='picture' className='circle'/>
                            <img src={e.img} alt='picture' className='circle'/>
                        </div>

                        <div className='description-tech'>
                            <p className='description'>{e.description}</p>
                            <br/>
                            <p className='tech'>{e.tech}</p>
                        </div>

                        <div className='links'>
                            <a href={e.site_link} target="_blank"><p className='link'>{e.title}</p></a>
                            <a href={e.github_link} target="_blank"><p className='link'>GitHub</p></a>
                        </div>

                    </div>


                    <div className='right-side'>
                        <img src={e.img} alt='project pic'/>
                    </div>

                </div>
            )
        })

        return (
            <div className='project-class'>
                {projectData}
            </div>
        )    
    }
}

export default Profile;