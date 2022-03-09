const express = require('express')
const app = express()
const router = require('./controller/controller.js')
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(
   cors({
      origin: "*",
      credentials: true,
   })
);

app.use(express.json())
app.use('/confessions', router)

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/homepage/index.html'))
})

app.get('/style.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/homepage/style.css'))
})


module.exports = app;
