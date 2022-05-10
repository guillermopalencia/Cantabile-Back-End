'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Artist, { foreignKey: 'artistId' })
      Song.belongsTo(models.Album, { foreignKey: 'artistId' })
      Song.belongsToMany(models.User, {
        through: models.Playlists,
        as: 'songs',
        foreignKey: 'songId'
      })
      Song.belongsToMany(models.User, {
        through: models.LikedSongs,
        as: 'moresongs',
        foreignKey: 'songId'
      })
    }
  }
  Song.init(
    {
      name: DataTypes.STRING,
      listeningtime: DataTypes.INTEGER,
      artistId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'artist',
          key: 'id'
        }
      },
      albumId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'album',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Song',
      tableName: 'songs'
    }
  )
  return Song
}
