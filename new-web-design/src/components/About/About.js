import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Nav from '../../components/Nav/Nav';

class About extends Component {
  render() {
    return (
      <div className="about">

        <Nav/>

        <div className='picAndInfo'>

            <div className='left-margin'>
            </div>

            <div className='main'>
                <p className='info'>Web Developer focused on technologies such as React, JavaScript, HTML/CSS, PostgreSQL, and more. I am passionate about improving the lives of others through beautiful and efficient websites. I originally studied English and explored jobs in social work, but my love for art and technology eventually won out. I embrace challenges that help me grow as a person and as a professional. I want to use my coding skills to improve the lives of others. In my free time I can be found exploring Provo on long walks, cooking vegan meals with my husband, and catching up on current events.</p>
            </div>

            <div className='right-margin'>
            </div>

        </div>

      </div>
    );
  }
}

export default About;