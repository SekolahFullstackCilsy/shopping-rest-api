const jwt = require('jsonwebtoken')
const { User } = require('../models')
const { SECRET_TOKEN } = process.env

const authorization = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, SECRET_TOKEN)
    const user = await User.findOne({
      where: {
        id: decoded.userId
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    next()
  } catch (error) {
    console.log(error)
    res.status(401).send({
      error: 'Authetication Error'
    })
  }
}

module.exports = authorization