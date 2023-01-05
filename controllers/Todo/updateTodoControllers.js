const asyncHandler =  require("../../services/asyncHandlers")
const Todo  = require("../../models/Todo_list")

const updateTodoControllers = asyncHandler(async(req,res)=>{
    //Find todo through Id pass as params
    try{
        const todoId = req.params.todoId
        const {title} = req.body

        if (!todoId) {
            res.status(400).json({
              success: false,
              message: "Todo ID not present",
            });
        }
        if (!title) {
            res.status(400).json({
              success: false,
              message: "Todo ID not present",
            });
        }

        

        const updateTodo = await Todo.findOne({_id:todoId})
        if(updateTodo){
                updateTodo.title = title
                console.log(updateTodo.title)
                updateTodo.save()
        }
        res.status(200).json({
            success: true,
            updateTodo,
          });


    }
    catch(error){
        console.log("Error while creating/editing task");
        console.log(error.message);
        return res.status(400).json({
        success: false,
        message: "Error while creating/editing task",
        });
    }

})

module.exports = updateTodoControllers
