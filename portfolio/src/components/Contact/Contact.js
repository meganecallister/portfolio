import React, { Component } from 'react';
import './Contact.css';
import github from './github.png';
import linkedin from './linkedin.png';

class Contact extends Component {
  render() {
    return (
      <div className="contact">

        <h1>contact</h1>
        <p>Yo you should contact me, yo!</p>
        <div>NODEMAILER</div>

        <a href='https://www.linkedin.com/in/meganecallister/' target='_blank'><img src={github} alt='LinkedIn icon'/></a>
        <a href='https://github.com/meganecallister' target='_blank'><img src={linkedin} alt='GitHub icon'/></a>

      </div>
    );
  }
}

export default Contact;