const express = require('express')
const router = express.Router()

const Confession = require('../model/models.js')

// http://localhost:3000/confessions/
router.get('/', (req, res) => {
    return Confession.all
  })
  

// http://localhost:3000/confessions/:id
router.get('/:id', (req, res) => {
    // const allData = Confessions.all
    // return allData.find(confession => confession.id === req.params.id)
    return Confession.getConfessionsbyId(req.params.id)
})


// http://localhost:3000/confessions/:category
router.get('/:category', (req, res) => {
    return Confession.findByCategory(req.params.category)
})


// http://localhost:3000/confessions/:keyword
router.get('/:keyword', (req, res) => {
    return Confession.findConfession(req.params.keyword)
})

module.exports = router;
