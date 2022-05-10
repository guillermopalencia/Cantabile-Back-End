const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.GetArtist)
Router.get('/:artist_id', controller.GetArtistAlbums)
Router.post('/new', controller.CreateArtist)

module.exports = Router
