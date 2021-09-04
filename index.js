const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const fileUpload = require('express-fileupload')

const { sequelize } = require('./src/models')

// routes
const authRouter = require('./src/routes/auth')
const productRouter = require('./src/routes/product')
const cartRouter = require('./src/routes/cart')
const checkoutRouter = require('./src/routes/checkout')
const authorization = require('./src/middleware/authorization')

sequelize.authenticate().then(() => {
  console.log('success connecting db');
})

// use
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(fileUpload({
  createParentPath: true
}))

app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/carts', cartRouter)
app.use('/checkout', checkoutRouter)

app.post('/upload', authorization, async (req, res, next) => {
  const randomString = Math.random().toString(30).substring(2, 15) + Math.random().toString(30).substring(2, 15)
  try {
    if (!req.files) {
      res.status(500).send({
        status: "failed",
        code: 500,
        message: "No file uploaded"
      })
    } else {
      const image = req.files.image
      image.mv(__dirname + '/public/' + randomString+'_'+image.name, (err) => {
        if (err) {
          res.send({err})
        }
        res.send({
          data: `http://localhost:8000/${randomString}_${image.name}`
        })
      })
    }

  } catch (error) {
    return next(error)
  }
})


app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
})