'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Album, { foreignKey: 'artistId' })
      Artist.hasMany(models.Song, { foreignKey: 'artistId' })
    }
  }
  Artist.init(
    {
      name: DataTypes.STRING,
      numofalbums: DataTypes.INTEGER,
      description: DataTypes.STRING,
      discography: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Artist',
      tableName: 'artists'
    }
  )
  return Artist
}
