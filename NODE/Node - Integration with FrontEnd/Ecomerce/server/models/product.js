const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

  productName:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  image:{
    type:String
  },

  catId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category"
  },
  description:{
    type:String,
    required:true
  }

},{timestamps:true})

const product = mongoose.models.product || mongoose.model("product",productSchema)

module.exports = product