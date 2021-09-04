const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class Checkout extends Model {}

Checkout.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  payment_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
}, {
  modelName: 'checkouts',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Checkout