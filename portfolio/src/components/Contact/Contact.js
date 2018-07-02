import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">

        <h1>Contact</h1>
        <p>Yo you should contact me, yo!</p>
        <div>I'm a nodemailer thingy!</div>

        <a href='https://www.linkedin.com/in/meganecallister/' target='_blank'><button>LinkedIn</button></a>
        <a href='https://github.com/meganecallister' target='_blank'><button>GitHub</button></a>

      </div>
    );
  }
}

export default Contact;