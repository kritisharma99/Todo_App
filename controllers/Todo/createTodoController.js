const asyncHandler =  require("../../services/asyncHandlers")
const Todo  = require("../../models/Todo_list")

/*********************************************
 * @createTodoController - a function creates Todo
 * @route /createTodo
 * @description - checking validation of Title,Tasks
 * @parameters - req,res
 ********************************************/

const createTodoController = asyncHandler(async(req,res)=>{
    const {title, tasks, isHighlighted} = req.body
    console.log("Details: ",title,tasks,isHighlighted)

    if(!title){
        throw new Error("Ttile required!")
    }
    if(typeof title !== "string"){
        throw new Error("Title should have a string value only")
    }

    if(tasks && !(Array.isArray(tasks))){
        throw new Error("Tasks should be a array object")
    }

    //Create entry of todo to database
    const todo = Todo.create({
        title,
        tasks,
        isHighlighted
    })

    res.send("All ok !")

})

module.exports = createTodoController