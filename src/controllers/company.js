const pool = require("../db")

async function getCompanies(req, res) {
  const data = await pool.query("SELECT * FROM company")
  const { rows, rowCount } = data

  return res.json({
    rowCount,
    rows
  })
}

async function getCompany(req, res) {
  const { id } = req.params

  const data = await pool.query(`SELECT * FROM company WHERE id=${id}`)

  if (data.rowCount === 0) return res.status(404).json({
    message: `No se encuentra la empresa con id ${id}`
  })

  const company = data.rows[0]

  return res.status(200).json({
    company
  })
}

module.exports = {
  getCompanies,
  getCompany
}