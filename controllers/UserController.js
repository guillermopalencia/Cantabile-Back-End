const { response } = require('express')
const { User, Song, PlayList, LikedSongs } = require('../models')

const getUsers = async (req, res) => {
  try {
    const results = await User.findAll()
    res.send(response)
  } catch (error) {
    throw error
  }
}

const getUserPlayList = async (req, res) => {
  try {
    const list = await User.findAll({
      include: [
        {
          model: Song,
          as: 'play_lists',
          through: { attributes: [] }
        }
      ]
    })
    res.send(list)
  } catch (error) {
    throw error
  }
}

const getUserLikedSongs = async (req, res) => {
  try {
    const list = await User.findAll({
      include: [
        {
          model: Song,
          as: 'liked_songs',
          through: { attributes: [] }
        }
      ]
    })
    res.send(list)
  } catch (error) {
    throw error
  }
}

const createUser = async (req, res) => {
  try {
    let userBody = req.body
    let result = await User.create(userBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsers,
  getUserPlayList,
  getUserLikedSongs,
  createUser
}
