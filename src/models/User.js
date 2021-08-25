const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'users',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = User