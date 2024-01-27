function checkId(req, res, next) {
  const { id } = req.params

  const isNotNumber = Number.isNaN(parseInt(id))

  if (isNotNumber) return res.status(400).json({
    message: "El id no es válido"
  })

  next()
}

module.exports = {
  checkId
}