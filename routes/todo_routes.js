const routes = require("express").Router()
const getAllTodo = require("../controllers/Todo/getAllTodo")
const createTodo = require("../controllers/Todo/createTodoController")
const updateTodo = require("../controllers/Todo/updateTodoControllers")
const deleteTodo = require("../controllers/Todo/deleteTodoController")
/*==========================================
    All Routes
    * Home Route : "/"
    * 
==========================================*/

routes.route("/").get((req, res) => {
    res.status(200).send("hello");
});

//Todd Routes :
//To get all todo
routes.route("/getAllTodo").get(getAllTodo);
//To create Todo
routes.route("/createTodo").post(createTodo);
//To update Todo
routes.route("/updateTodo/:todoId").put(updateTodo);
//To delete Todo
routes.route("/deleteTodo/:todoId").delete(deleteTodo);



module.exports = routes;