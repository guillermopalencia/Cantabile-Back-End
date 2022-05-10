const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.get('/', controller.getSongs)
Router.post('/:artistId/:albumId', controller.createSongs)

module.exports = Router
