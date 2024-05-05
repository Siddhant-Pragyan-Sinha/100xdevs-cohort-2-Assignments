const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://lasyacodes:***/todo")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
let todo=mongoose.model("todos",todoSchema)

module.exports={
    todo
}
