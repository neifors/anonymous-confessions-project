const express = require('express')
const router = express.Router()

const Confession = require('../model/models')

// /confessions/
router.get('/', (req, res) => {
    res.send(Confession.all);
  })
  

// /confessions/:id
router.get('/:id', (req, res) => {
    res.send( Confession.getConfessionById(req.params.id))
})


// /confessions/category/:category
router.get('/category/:category', (req, res) => {
    res.send( Confession.findByCategory(req.params.category))
})


// /confessions/search/:keyword
router.get('/search/:keyword', (req, res) => {
    res.send(Confession.findConfession(req.params.keyword))
})

// /confessions/post
router.post('/post', (req, res) => {
    console.log(req.body)
    Confession.addConfession(req.body) 
})


module.exports = router;
