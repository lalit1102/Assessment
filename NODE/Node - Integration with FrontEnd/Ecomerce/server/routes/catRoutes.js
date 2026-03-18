const express = require("express")
const {catDisp,catInsert} = require("../controllers/catControllers")
const catRouter = express.Router()

catRouter.get("/",catDisp)
catRouter.post("/",catInsert)

module.exports = catRouter