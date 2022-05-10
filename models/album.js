'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Artist, { foreignKey: 'artistId' })
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      artistId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'artist',
          key: 'id'
        }
      },
      numofsongs: DataTypes.INTEGER,
      listeningtime: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Album',
      tableName: 'albums'
    }
  )
  return Album
}
