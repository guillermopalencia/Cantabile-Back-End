'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Song, {
        as: 'liked_songs',
        through: models.LikedSongs,
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Song, {
        as: 'play_lists',
        through: models.Playlists,
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user'
    }
  )
  return User
}
