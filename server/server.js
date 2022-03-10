const express = require('express')
const app = express()
const router = require('./controller/controller.js')
const cors = require('cors');
const path = require('path')
app.use(express.json());
app.use(cors({
   origin : "*"
}));

app.use(express.json())
app.use('/confessions', router)

let htmlFile = path.join(__dirname, 'homepage/index.html');
let cssFile = path.join(__dirname, "homepage/style.css")


app.get('/', (req, res) => {
   res.status = 200;
   res.sendFile(htmlFile)
})

app.get('/style.css', (req, res) => {
   res.sendFile(cssFile)
})

module.exports = app;
