const category = require("../models/category")
// category disp karva
const catDisp = async (req,res) => {
  try {
    const data = await category.find()
    res.json({
      success:true,
      message:"category dispay successfully",
      "catData":data
    })
  } catch (error) {
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
}


// category insert karva
 

const catInsert = async (req,res) => {
  try {
     const data = await category.create(req.body)
    res.json({
      success:true,
      message:"category insert successfully",
      data: data
      
    })
  } catch (error) {
    console.log(error.message);
    res.json({success:false,message:error.message})
  }

}

module.exports = {catDisp,catInsert}
