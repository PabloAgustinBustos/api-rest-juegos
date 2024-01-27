const {Router} = require("express")
const { getVideogames, getVideogame } = require("../controllers/videogame")
const { checkId } = require("../middlewares/common")

const routes = Router()

routes.get("/videogame", getVideogames)
routes.get("/videogame/:id", checkId, getVideogame)

module.exports = routes