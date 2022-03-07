const express = require('express')
const router = express.Router()

const Confession = require('../model/models')

// http://localhost:3000/confessions/
router.get('/', (req, res) => {
    res.send(Confession.all);
  })
  

// http://localhost:3000/confessions/:id
router.get('/:id', (req, res) => {
    res.send( Confession.getConfessionById(req.params.id))
})


// http://localhost:3000/confessions/category/:category
router.get('/category/:category', (req, res) => {
    res.send( Confession.findByCategory(req.params.category))
})


// http://localhost:3000/confessions/search/:keyword
router.get('/search/:keyword', (req, res) => {
    res.send(Confession.findConfession(req.params.keyword))
})

module.exports = router;
