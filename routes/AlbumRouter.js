const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.get('/', controller.GetAlbums)

Router.post('/:artist_id', controller.CreateAlbum)

module.exports = Router
