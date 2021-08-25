const sequelize = require('../database/connection')
const User = require('./User')
const Product = require('./Product')
const Payment = require('./Payment')
const Cart = require('./Cart')
const Checkout = require('./Checkout')

Product.hasMany(Cart, {
  as: 'carts',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Cart.belongsTo(Product, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

User.hasMany(Cart, {
  as: 'carts',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Cart.belongsTo(User, {
  as: 'users',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

module.exports = {
  sequelize,
  User,
  Product,
  Payment,
  Cart,
  Checkout
}