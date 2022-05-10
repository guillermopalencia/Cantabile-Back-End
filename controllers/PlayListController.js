const { Song, User, PlayList } = require('../models')

const getPlayListById = async (req, res) => {
  const userId = req.params.id
  const list = await User.findAll({
    include: [
      {
        model: Song,
        as: 'songs',
        through: { attributes: [] }
      }
    ],
    where: { id: userId }
  })
  res.send(list)
}

const addToList = async (req, res) => {
  const userId = req.params.id
  const songId = req.body.songId
  const newList = {
    userId,
    songId
  }
  const response = await PlayList.create(newList)
  res.send(response)
}

const addSongToList = async (req, res) => {
  const userId = req.body.userId
  const songRefId = req.body.songRefId
  const songId = await Song.create({
    songRefId
  }).then((item) => item.id)
  const newListEntity = {
    userId,
    songId
  }
  const response = await PlayList.create(newListEntity)
  res.send(response)
}

const removeSongFromList = async (req, res) => {
  const userId = req.params.userId
  const songId = req.params.animeId
  PlayList.destroy({
    where: { userId, songId }
  })
  res.send('deleted')
}

module.exports = {
  getPlayListById,
  addToList,
  addSongToList,
  removeSongFromList
}
