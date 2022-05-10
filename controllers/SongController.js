const { Song } = require('../models')

const getSongs = async (req, res) => {
  try {
    const songs = await Song.findAll()
    res.send(songs)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getSongs
}
