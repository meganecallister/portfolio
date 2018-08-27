import React, { Component } from 'react';
import './Contact.css';
// import github from './github.png';
// import linkedin from './linkedin.png';
// import twitter from './twitter.png';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      fakeId: '10',
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  handleChangeEmail(value) {
    this.setState({email: value});
  }

  handleChangeSubject(value) {
    this.setState({subject: value});
  }

  handleChangeMessage(value) {
    this.setState({message: value});
  }
  
  handleClick() {
    const { name, subject, email, message } = this.state;
    const body = { name, subject, email, message };
    console.log('body ==>', body)
    axios.post('/sendEmail/', body).then((res) => {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    })
  }

  render() {
    return (
      <div className="contact">

        <h1>contact</h1>

        {/* <div className='icons'>
          <a href='https://www.linkedin.com/in/meganecallister/' target='_blank' rel='opopener noreferrer'><img src={linkedin} alt='GitHub icon'/></a>
          <a href='https://github.com/meganecallister' target='_blank'  rel='opopener noreferrer'><img style={{height: 48}}src={github} alt='LinkedIn icon'/></a>
          <a href='https://twitter.com/maneysmilesback' target='_blank'  rel='opopener noreferrer'><img style={{height: 40, margin: 5, marginLeft: 5}} src={twitter} alt='Twitter icon'/></a>
        </div> */}

        {/* <p>Want to get in touch? Email me here!</p> */}
        
        <div className='contact-inputs'>

          <input onChange={ e => this.handleChangeName( e.target.value) } type="text"
          placeholder="Name" value={this.state.name} className='name-and-email'></input>

          <input onChange={ e => this.handleChangeEmail( e.target.value) } type="text" 
          placeholder="Email" value={this.state.email} className='name-and-email'></input>

          <input onChange={ e => this.handleChangeSubject( e.target.value) } type="text"
          placeholder="Subject" value={this.state.subject} className='name-and-email'></input>   

          <input onChange={ e => this.handleChangeMessage( e.target.value) } type="text"
          placeholder="Message" value={this.state.message} className='message'></input>

          <button onClick={this.handleClick} className="send">Send</button>

        </div>

      </div>
    );
  }
}

export default Contact;