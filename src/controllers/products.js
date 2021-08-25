const { Product } = require('../models');

exports.create = async (req, res, next) => {
  try {
    await Product.create(req.body);

    return res.status(201).json({
      status: "Success",
      code: 201,
      message: "Success add product."
    });
  } catch (error) {
    return next(error)
  }
};
exports.findAll = async (req, res, next) => {
  try {
    const data = await Product.findAll({});

    return res.status(201).json({
      status: "Success",
      code: 201,
      data: data
    });
  } catch (error) {
    return next(error)
  }
};
