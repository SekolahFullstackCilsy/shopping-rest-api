
exports.upload = async (req, res, next) => {
  try {
    // res.send({
    //   test: req.files,
    //   dir: __dirname
    // })
    if (!req.files) {
      res.status(500).send({
        status: "failed",
        code: 500,
        message: "No file uploaded"
      })
    } else {
      const image = req.files.image
      console.log(image.name)
      console.log(__dirname+'/public/');
      image.mv(__dirname + '/public/' + image.name, (response, err) => {
        if (err) {
          res.send({err})
        }
        res.send({
          data: `http://localhost:8000/${image.name}`
        })
      })
    }

  } catch (error) {
    return next(error)
  }
}