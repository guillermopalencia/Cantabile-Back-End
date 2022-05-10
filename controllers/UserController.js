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

module.exports = {
  getUsers
}
