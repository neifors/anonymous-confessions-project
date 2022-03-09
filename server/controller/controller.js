const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));

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
    //Confession.addConfession(req.body)
})

// /confessions/reaction
router.post('/reaction', (req, res) => {
    Confession.addReaction(req.body)
})

// confessions/postComment
router.post('/postComment', (req, res) => {
    Confession.createComment(req.body)
})

// /confessions/delete
router.post('/delete', (req, res) => {
    Confession.removeConfession(req.body.id)
})

module.exports = router;

