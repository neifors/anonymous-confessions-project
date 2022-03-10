const express = require('express')
const router = express.Router()

const Confession = require('../model/models')

// /confessions/
router.get('/', (req, res) => {
    try{
        res.status(200).send(Confession.all)
    } catch(err) {
        res.status(404).send(err.message);
    }
  })
  

// /confessions/:id
router.get('/:id', (req, res) => {
    try{
        res.status(200).send(Confession.getConfessionById(req.params.id))
    } catch(err) {
        res.status(404).send(err.message);
    }
})


// /confessions/category/:category
router.get('/category/:category', (req, res) => {
    try{
        res.status(200).send(Confession.findByCategory(req.params.category))
    } catch(err) {
        res.status(404).send(err.message);
    }
})


// /confessions/search/:keyword
router.get('/search/:keyword', (req, res) => {
    try{
        res.status(200).send(Confession.findConfession(req.params.keyword))
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// /confessions/post
router.post('/post', (req, res) => {
    try{
        Confession.addConfession(req.body) 
        res.sendStatus(201)
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// /confessions/reaction
router.post('/reaction', (req, res) => {
    try{
        Confession.addReaction(req.body)
        res.sendStatus(201)
    } catch(err) {
        res.status(404).send(err.message);
    }
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
