const asyncHandler =  require("../../services/asyncHandlers")
const Todo  = require("../../models/Todo_list")

const deleteTodoController = asyncHandler(async(req,res)=>{
    try{
        const todoId = req.params.todoId
        await Todo.findOneAndDelete({_id:todoId},function (err, docs) {
            if (!err){
                console.log(docs)
                res.status(200).json({
                    success: true,
                    message: "Todo deleted successfully",
                  });
            }
        
    })
}
    catch(error){
        console.log(error)
        return res.status(400).json({
            success:false,
            message:"Todo doesn't exist"
        })
    }
    
});

module.exports = deleteTodoController;