const Router = require('express').Router()
const controller = require('../controllers/LikedSongsController')

Router.get('/', (req, res) => {
  res.send('hello')
})
Router.get('/:id', controller.getLikedSongsById)
Router.post('/', controller.addSongToLikedSongs)
Router.post('/:id/:songId', controller.addToLikedSongs)
Router.delete('/:userId/:songId', controller.removeSongFromLikedSongs)

module.exports = Router
