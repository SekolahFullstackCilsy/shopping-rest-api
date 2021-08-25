const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class Checkout extends Model {}

Checkout.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  }
}, {
  modelName: 'checkouts',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Checkout