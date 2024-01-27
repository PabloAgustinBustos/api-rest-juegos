const pool = require("../db")

async function getVideogames(req, res) {
  const data = await pool.query("SELECT * FROM videogame")
  const { rows, rowCount } = data

  return res.json({
    rowCount,
    rows
  })
}

async function getVideogame(req, res) {
  const { id } = req.params

  const data = await pool.query(`SELECT * FROM videogame WHERE id=${id}`)

  if (data.rowCount === 0) return res.status(404).json({
    message: `No se encuentran juegos con id ${id}`
  })

  const videogame = data.rows[0]

  res.json({
    videogame
  })
}

module.exports = {
  getVideogames,
  getVideogame
}