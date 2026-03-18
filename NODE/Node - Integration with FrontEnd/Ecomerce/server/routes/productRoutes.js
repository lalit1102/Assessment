const express = require("express")
const { productDisp, productInsert } = require("../controllers/productController")
const productRouter = express.Router()

const upload = require("../config/multer")

productRouter.get("/display",productDisp)
productRouter.post("/insert",upload.single("image"),productInsert)

module.exports = productRouter