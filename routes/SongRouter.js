const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getSongs)
Router.post('/:artist_id/:album_id', controller.createSongs)

module.exports = Router
