const product = require("../models/product");

const productDisp = async (req, res) => {
  try {
    console.log(req.body)
    const data = await product.find().populate("catId");

    res.json({
      success: true,
      message: "Product display successfully",
      productData: data,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const productInsert = async (req, res) => {

  try {
      console.log(req.body)
    const data = await product.create({
      productName: req.body.productName,
      price: req.body.price,
      description: req.body.description,
      catId: req.body.catId,
      image: req.file.path
    });

    res.json({
      success: true,
      message: "Product inserted successfully",
      productData: data,
    });

  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { productInsert, productDisp };