const mongoose=require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required: true
  }
});

module.exports=mongoose.model("Card",cardSchema);