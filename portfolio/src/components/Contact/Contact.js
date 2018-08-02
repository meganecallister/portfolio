import React, { Component } from 'react';
import './Contact.css';
import github from './github.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      // email: '',
      subject: '',
      message: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeName(value) {
    this.setState({name: value});
  }

  // handleChangeEmail(value) {
  //   this.setState({email: value});
  // }

  handleChangeSubject(value) {
    this.setState({subject: value});
  }

  handleChangeMessage(value) {
    this.setState({message: value});
  }
  
  handleClick() {
    const { name, subject, message } = this.state;
    const body = { name, subject, message };
    console.log('body ==>', body)
    axios.post('/sendEmail/', body).then((res) => {
      this.setState({
        name: '',
        // email: '',
        subject: '',
        message: ''
      })
    })
  }




  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: name,   
            email: email,  
            messsage: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}








  render() {
    return (
      <div className="contact">

        <h1>contact</h1>


        <div className='icons'>
          <a href='https://github.com/meganecallister' target='_blank'><img src={linkedin} alt='GitHub icon'/></a>
          <a href='https://www.linkedin.com/in/meganecallister/' target='_blank'><img style={{height: 48}}src={github} alt='LinkedIn icon'/></a>
          <a href='https://twitter.com/maneysmilesback' target='_blank'><img style={{height: 40, margin: 5, marginLeft: 5}} src={twitter} alt='Twitter icon'/></a>
        </div>


        {/* <p>Want to get in touch? Email me here!</p> */}
        
        <div className='contact-inputs'>

          {/* <input onChange={ e => this.handleChangeName( e.target.value) } type="text"
          placeholder="Name" value={this.state.name} className='name-and-email'></input> */}

          {/* <input
          onChange={ e => this.handleChangeEmail( e.target.value) }
          type="text" 
          placeholder="Email" value={this.state.email} className='name-and-email'></input> */}

          {/* <input onChange={ e => this.handleChangeSubject( e.target.value) } type="text"
          placeholder="Subject" value={this.state.subject} className='name-and-email'></input>   

          <input onChange={ e => this.handleChangeMessage( e.target.value) } type="text"
          placeholder="Message" value={this.state.message} className='message'></input> */}

          {/* <button onClick={this.handleClick} className="send">Send</button> */}



<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" rows="5" id="message"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>


      </div>
    );
  }
}

export default Contact;