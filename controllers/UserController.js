const { response } = require('express')
const { User } = require('../models')

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
          as: 'play_list',
          through: { attributes: [] }
        }
      ]
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsers,
  getUserPlayList
}
