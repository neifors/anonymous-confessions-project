const express = require('express')
const router = express.Router()
const Confessions = require('../model/models.js')

// http://localhost:3000/confessions/
router.get('/', (req, res) => {
    res.send(Confessions.all)
    //res.sendFile(path.join(__dirname, '/homepage/index.html'))
  })
  

// http://localhost:3000/confessions/:id
router.get('/:id', (req, res) => {
    // const allData = Confessions.all
    // return allData.find(confession => confession.id === req.params.id)
    try {
        res.send(getConfessionsbyId(req.params.id))
    }
    catch (err) {
        res.status(404)
    }
  })


// http://localhost:3000/confessions/:category
router.get('/:category', (req, res) => {
    res.send(findByCategory(req.params.category))
})


// http://localhost:3000/confessions/:keyword
router.get('/:keyword', (req, res) => {
    res.send(findConfession(req.params.keyword))
})

module.exports = router
