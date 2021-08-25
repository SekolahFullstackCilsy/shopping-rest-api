const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

const { sequelize } = require('./src/models')

// routes
const authRouter = require('./src/routes/auth')
const productRouter = require('./src/routes/product')
const cartRouter = require('./src/routes/cart')

sequelize.authenticate().then(() => {
  console.log('success connecting db');
})

// use
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/carts', cartRouter)


app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
})