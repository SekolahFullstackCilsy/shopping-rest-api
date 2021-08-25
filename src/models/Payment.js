const { Model, DataTypes } = require('sequelize')      
const connection = require('../database/connection')

class Payment extends Model {}

Payment.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  total_price: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  modelName: 'payments',
  sequelize: connection,
  paranoid: false,
  timestamps: false
})

module.exports = Payment