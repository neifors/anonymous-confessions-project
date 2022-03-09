const express = require('express')
const app = express()
const router = require('./controller/controller.js')
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(express.json())
app.use('/confessions', router)

app.get('/', (req, res) => {
   res.sendFile('C:\\Users\\Isabel\\Documents\\FUTUREPROOF\\LAP-1 PROJECT\\server\\homepage\\index.html')
})

app.get('/style.css', (req, res) => {
   res.sendFile('C:\\Users\\Isabel\\Documents\\FUTUREPROOF\\LAP-1 PROJECT\\server\\homepage\\style.css')
})


//const path = require('path')
// app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, '/homepage/index.html'))
//  })
 
//  app.get('/style.css', (req, res) => {
//    res.sendFile(path.join(__dirname, '/homepage/style.css'))
//  })
 

module.exports = app;
