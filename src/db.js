const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "13112012pab",
  database: "stim",
  port: 5432
})

module.exports = pool