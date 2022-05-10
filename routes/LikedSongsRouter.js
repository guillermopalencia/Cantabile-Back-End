const Router = require('express').Router()
const controller = require('../controllers/LikedSongsController')

Router.get('/', (req, res) => {
  res.send('hello')
})
Router.get('/:id', controller.getLikedSongsById)

module.exports = Router
