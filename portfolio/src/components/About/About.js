import React, { Component } from 'react';
import './About.css';
import profile from './profile.jpg';

class About extends Component {
  render() {
    return (
      <div className="about">

        <h1>about</h1>

        <div className='picAndInfo'>

          <img className='pic' src={profile}/>

          <p className='info'>Hi, I'm Megan. I am a web developer focused on technologies such as React, JavaScript, HTML/CSS, PostgreSQL, and more.  In my free time I can be found exploring Provo on long walks, cooking vegan meals with my husband, and catching up on current events.</p>
          
        </div>

      </div>
    );
  }
}

export default About;