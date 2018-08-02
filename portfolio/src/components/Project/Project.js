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
        console.log(this.state.user_id)

        axios.get(`/api/project_data/${this.state.user_id}`)
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
                    <p>{e.name}</p>
                    <img src={e.img} alt='project pic'/>
                </div>
            )
        })

        return (
            <div className='profile'>

                <div className='profile-page'>
                    <h1>Profile of {this.state.user_id}!</h1>
                    {projectData}
                </div>

            </div>
        )    
    }
}

export default Profile;