const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
  catName:{type:String,required:true}
  
},{timestamps:true})

const category = mongoose.models.category || mongoose.model("category",catSchema)

module.exports = category