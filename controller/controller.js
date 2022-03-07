const express = require('express')
const router = express.Router()
const Confessions = require('../model/models.js')
const funcs = require('../model/models.js')

// http://localhost:3000/confessions/
router.get('/', (req, res) => {
    return Confessions.all
    //res.sendFile(path.join(__dirname, '/homepage/index.html'))
  })
  

// http://localhost:3000/confessions/:id
router.get('/:id', (req, res) => {
    // const allData = Confessions.all
    // return allData.find(confession => confession.id === req.params.id)
    try {
        return getConfessionsbyId(req.params.id)
    }
    catch (err) {
        res.status(404)
    }
  })


// http://localhost:3000/confessions/:category
router.get('/:category', (req, res) => {
    return findByCategory(req.params.category)
})


// http://localhost:3000/confessions/:keyword
router.get('/:keyword', (req, res) => {
    return findConfession(req.params.keyword)
})

module.exports = router
