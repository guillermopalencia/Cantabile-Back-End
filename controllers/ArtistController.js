const { Artist, Album } = require('../models')

const GetArtist = async (req, res) => {
  try {
    const artists = await Artist.findAll()
    res.send(artists)
  } catch (error) {
    res.send(error)
  }
}

const GetArtistAlbums = async (req, res) => {
  try {
    const results = await Artist.findByPk(req.params.artist_id, {
      include: Album
    })
    res.send(results)
  } catch (error) {
    throw error
  }
}

const CreateArtist = async (req, res) => {
  try {
    const artistBody = req.body
    const results = await Artist.create(artistBody)
    res.send(results)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArtist,
  GetArtistAlbums,
  CreateArtist
}
