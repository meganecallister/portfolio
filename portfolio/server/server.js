require('dotenv').config();
// const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const xoauth2 = require('xoauth2');

const {
    SERVER_PORT,
    CONNECTION_STRING,
    GMAIL_ADDRESS,
    GMAIL_PASSWORD
} =  process.env

const app = express();

// app.use( express.static(`${__dirname}/../build` ));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})

//==========================//

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     xoauth2: xoauth2.createXOAuth2Generator({
//       user: process.env.GMAIL_ADDRESS,
//       // pass: process.env.GMAIL_PASSWORD,     
//       clientId: '',
//       clientSecret: '',
//       refreshToken: '' 
//     })
//   }
// });

// var mailOptions = {
//   from: 'some rando <meganecallister@gmail.com',
//   to: 'meganecallister@gmail.com',
//   subject: 'Nodemailer test',
//   text: 'Hello World!'
// }

// transporter.sendMail(mailOptions, function (err, res) {
//   if(err){
//     console.log('Error');
//   } else {
//     console.log('Email Send');
//   }
// })


// app.post('/sendEmail/', function(req, res) {
//   console.log('req.body.name ==>', req.body.name);
//   transporter.sendMail({
//     from: req.body.name,
//     to: [GMAIL_ADDRESS],
//     subject: req.body.subject || '[No subject]',
//     html: req.body.message || '[No message]',
//   })
// });

//===========================//

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//            user: process.env.GMAIL_USERNAME,
//            pass: process.env.GMAIL_PASSWORD
//        }
//    });

//==========================//

//POST route from contact form
// app.post('/contact', function (req, res) {
//     let mailOpts, smtpTrans;
//     smtpTrans = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: GMAIL_ADDRESS,
//         pass: GMAIL_PASSWORD
//       }
//     });
//     mailOpts = {
//       from: req.body.name + ' &lt;' + req.body.email + '&gt;',
//       to: GMAIL_ADDRESS,
//       subject: 'New message from contact form at tylerkrys.ca',
//       text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
//     };
//     smtpTrans.sendMail(mailOpts, function (error, response) {
//       if (error) {
//         res.render('contact-failure');
//       }
//       else {
//         res.render('contact-success');
//       }
//     });
//   });

//==========================//

app.get('/viewProjects', (req, res) => {
    // console.log('reached the server')
    const db = req.app.get('db');
    db.view_projects().then((projects) => {
        res.status(200).send(projects);
        // console.log(projects);
    })
})

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} squirrels ready to charge.`))