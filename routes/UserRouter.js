const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.getUsers)
Router.get('/playlist', controller.getUserPlayList)
Router.get('/likedsongs', controller.getUserLikedSongs)
Router.post('/', controller.createUser)

module.exports = Router
