const { Cart, Checkout, Payment, Product, sequelize } = require('../models');

exports.checkout = async (req, res, next) => {
  const transaction = await sequelize.transaction()
  try {
    const getCartByUser = await Cart.findAll({
      include: [
        {
          model: Product,
          as: 'products',
          required: false
        },
      ],
      where: { user_id: req.params.userId }
    });

    const totalPrice = getCartByUser.reduce((acc, val) => {
      return acc + (val.quantity * val.products.price)
    }, 0)

    // insert to payment
    const payment = await Payment.create(
      {
        total_price: totalPrice,
      },
      { transaction }
    )

    const checkoutTemp = []
    getCartByUser.forEach((val) => {
      checkoutTemp.push({
        payment_id: payment.id, // get from payment table
        user_id: req.params.userId,
        product_id: val.product_id
      })
    })

    // insert multiple to checkout
    await Checkout.bulkCreate(checkoutTemp, { transaction })

    // clear cart by user id
    await Cart.destroy({where: {user_id: req.params.userId}})

    await transaction.commit()

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success checkout."
    });
  } catch (error) {
    await transaction.rollback()
    return next(error)
  }
};
