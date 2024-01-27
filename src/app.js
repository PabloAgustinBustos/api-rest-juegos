const express = require("express")
const dotenv = require("dotenv")

const companyRoutes = require("./routes/company.routes")
const videogameRoutes = require("./routes/videogame.routes")

dotenv.config({
  path: `${__dirname}/../.env`
})


const app = express()

app.get("/", (req, res) => {
  res.json({
    message: "funciona"
  })
})

app.use("/api/v1", companyRoutes)
app.use("/api/v1", videogameRoutes)

app.use((req, res) => {
  return res.status(404).json({
    message: "Esa ruta no existe"
  })
})

module.exports = app