const Router = require('express').Router()
const controller = require('../controllers/PlayListController')

Router.get('/', (req, res) => {
  res.send('hello')
})
Router.get('/:id', controller.getPlayListById)
Router.post('/', controller.addSongToList)
Router.post('/:id', controller.addToList)
Router.delete('/:userId/:songId', controller.removeSongFromList)

module.exports = Router
