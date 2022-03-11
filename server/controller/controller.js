const express = require('express')
const router = express.Router()

const Confession = require('../model/models');

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


// router.get('/post', (req, res) => {
//     res.send('sos')
// })

// router.route('/post').get( (req, res) => {
//     res.send('sos')
// }).post( (req, res) => {
//     //console.log(req)
//     //console.log(req.body)
//     res.send(Confession.addConfession(req.body))
// })


// /confessions/post

router.post('/post', (req, res) => {
    res.send(Confession.addConfession(req.body))
})

// /confessions/reaction
router.post('/reaction', (req, res) => {
    Confession.addReaction(req.body)
})

// confessions/postComment
router.post('/postComment', (req, res) => {
    try{
        Confession.createComment(req.body)
        res.sendStatus(201)
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// /confessions/delete
router.delete('/delete', (req, res) => {
    try{
        const confess = Confession.getConfessionById(req.body.id)
        if(confess) {
            Confession.removeConfession(req.body.id)
            res.sendStatus(204)
        }
        else
          throw new Error(`${req.body.id} does not exist`)
      } catch(err) {
        res.status(404).send(err.message);
      }
})

module.exports = router;

