const { Album, Artist } = require('../models')

const GetAlbums = async (req, res) => {
  try {
    const albums = await Album.findall()
    res.send(albums)
  } catch (error) {
    throw error
  }
}

const CreateAlbum = async (req, res) => {
  try {
    const artistId = parseInt(req.params.artist_id)
    const albumBody = {
      artistId,
      ...req.body
    }
    const results = await Album.create(albumBody)
    res.send(results)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAlbums,
  CreateAlbum
}
