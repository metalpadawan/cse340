const errorController = {}

errorController.triggerError = async function (req, res, next) {
  const err = new Error("Intentional server error")
  err.status = 500
  next(err)
}

module.exports = errorController
