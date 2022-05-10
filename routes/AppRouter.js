const Router = require('express').Router()
const ArtistRouter = require('./ArtistRouter')
const AlbumRouter = require('./AlbumRouter')
const LikedSongsRouter = require('./LikedSongsRouter')
const PlayListRouter = require('./PlayListRouter')
const SongRouter = require('./SongRouter')
const UserRouter = require('./UserRouter')

Router.use('/artist', ArtistRouter)
// Router.use('/user', UserRouter)
// Router.use('/song', SongRouter)
// Router.use('/likedsongs', LikedSongsRouter)
Router.use('/playlists', PlayListRouter)
Router.use('/album', AlbumRouter)

module.exports = Router
