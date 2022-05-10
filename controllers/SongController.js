const { Song } = require('../models')

const getSongs = async (req, res) => {
  try {
    const songs = await Song.findAll()
    res.send(songs)
  } catch (error) {
    throw error
  }
}

const createSongs = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let albumId = parseInt(req.params.ablum_id)
    let songBody = {
      artistId,
      albumId,
      ...req.body
    }
    let results = await Song.create(songBody)
    res.send(results)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getSongs,
  createSongs
}
