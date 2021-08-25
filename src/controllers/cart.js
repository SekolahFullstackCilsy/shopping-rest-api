const { Cart, Product, User } = require('../models');

exports.addToCart = async (req, res, next) => {
  try {
    await Cart.create(req.body);

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success add to cart."
    });
  } catch (error) {
    return next(error)
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const data = await Cart.findAll({
      include: [
        {
          model: Product,
          as: 'products',
          required: false
        },
        {
          model: User,
          as: 'users',
          required: false,
          attributes: ['name', 'username']
        }
      ],
      where: {
          user_id: req.params.id
        }
    });

    return res.status(201).json({
      status: "Success",
      code: 201,
      data: data
    });
  } catch (error) {
    return next(error)
  }
};

exports.updateQty = async (req, res, next) => {
  try {
    Cart.update({
      quantity: req.body.quantity,
    }, {
      where: { id: req.params.id },
    })

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: 'cart updated'
    });
  } catch (error) {
    return next(error)
  }
}