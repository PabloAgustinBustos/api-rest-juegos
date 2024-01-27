const { Router } = require("express")
const { getCompanies, getCompany } = require("../controllers/company")
const { checkId } = require("../middlewares/common")

const routes = Router()

routes.get("/company", getCompanies)
routes.get("/company/:id", checkId, getCompany)

module.exports = routes