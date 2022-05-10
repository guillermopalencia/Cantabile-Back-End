const Router = require('express').Router()
const controller = require('../controllers/LikedSongsController')

Router.get('/', (req, res) => {
  res.send('hello')
})

module.exports = Router
