const asyncHandler =  require("../../services/asyncHandlers")
const Todo  = require("../../models/Todo_list")

const getAllTodo =asyncHandler(async(req,res)=>{
    try{
        const {title, tasks, isHighlighted} = req.body
        console.log("Todo object :")
        res.send("GEt all todo")

    }
    catch(err){
        console.log("Error :", err)
    }
})

module.exports = getAllTodo