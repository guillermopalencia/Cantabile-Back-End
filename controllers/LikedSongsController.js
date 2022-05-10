const { Song, User, LikedSongs } = require('../models')

const getLikedSongsById = async (req, res) => {
  const userId = req.params.id
  const list = await User.findAll({
    include: [
      {
        model: Song,
        as: 'moresongs',
        through: { attributes: [] }
      }
    ],
    where: { id: userId }
  })
  res.send(list)
}

const addToLikedSongs = async (req, res) => {
  const userId = req.params.id
  const songId = req.body.songId
  const newList = {
    userId,
    songId
  }
  const response = await LikedSongs.create(newList)
  res.send(response)
}

const addSongToLikedSongs = async (req, res) => {
  const userId = req.body.userId
  const songRefId = req.body.songRefId
  const songId = await Song.create({
    songRefId
  }).then((item) => item.id)
  const newListEntity = {
    userId,
    songId
  }
  const response = await LikedSongs.create(newListEntity)
  res.send(response)
}

const removeSongFromLikedSongs = async (req, res) => {
  const userId = req.params.userId
  const songId = req.params.animeId
  LikedSongs.destroy({
    where: { userId, songId }
  })
  res.send('deleted')
}

module.exports = {
  getLikedSongsById,
  removeSongFromLikedSongs,
  addToLikedSongs,
  addSongToLikedSongs
}
