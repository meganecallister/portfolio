require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


const {
    SERVER_PORT,
    CONNECTION_STRING
} =  process.env

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
})

app.get('/viewProjects', (req, res) => {
    console.log('reached the server')
    const db = req.app.get('db');
    db.view_projects().then((projects) => {
        res.status(200).send(projects);
        console.log(projects);
    })
})

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} squirrels ready to charge.`))