require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const oauth2 = require('oauth2');
const xoauth2 = require('xoauth2');
const path = require('path');
const smtpTransport = require('nodemailer-smtp-transport');

const {
    SERVER_PORT,
    CONNECTION_STRING,
    GMAIL_ADDRESS,
    GMAIL_PASSWORD,
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN,
    ACCESS_TOKEN
} = process.env

const app = express();

app.use( express.static(`${__dirname}/../build` ));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})

//==========================//

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: GMAIL_ADDRESS,
      pass: GMAIL_PASSWORD,     
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN
    })
  }
}));

app.post('/sendEmail/', (req, res) => {
    const db = req.app.get('db');
    const { name, subject, email, message } = req.body;
    console.log(name, subject, email, message);
    // db.add_email_data([name, subject, email, message])
    // .then(email => {
    //     res.status(200).send(email);
    // });
    var mailOptions = {
        from: name,
        to: GMAIL_ADDRESS,
        subject: subject || '[No Subject]',
        html: "From " + name + " at " + email + ": " + message || '[No Message]'
      }
    db.view_email_data([name, subject, email, message])
    .then((sentEmail) => {
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            };
        res.status(200).send(sentEmail);            
        })
    })
});

app.get('/viewProjects', (req, res) => {
    // console.log('reached the server')
    const db = req.app.get('db');
    db.view_projects().then((projects) => {
        res.status(200).send(projects);
        // console.log(projects);
    })
})


app.get('/api/project_data/:id', (req, res) => {
    // console.log('req.params.id => ', req.params.id)
    const db = req.app.get('db');
    db.view_project_data([req.params.id])
    .then((projectData) => {
        res.status(200).send(projectData);
        // console.log('projectData', projectData)
    })
})


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} squirrels ready to charge.`))