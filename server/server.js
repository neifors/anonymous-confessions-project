const express = require('express')
const app = express()
const router = require('./controller/controller.js')
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
   cors({
      origin: "*",
      credentials: true,
   })
);

app.use(express.json())
app.use('/confessions', router)

// const dataFile = require('./data/data.json');

// //sends data.json - lets you see what the post method has added - deleted route but not actual file- data.json
// app.get('/datafile', (req, res) => {
//     res.json(dataFile);
// });

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/homepage/index.html'))
})

app.get('/style.css', (req, res) => {
   res.sendFile(path.join(__dirname, '/homepage/style.css'))
})


module.exports = app;
