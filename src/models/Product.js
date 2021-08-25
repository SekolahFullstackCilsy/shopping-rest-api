const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  real_stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  }
}, {
  modelName: 'products',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Product