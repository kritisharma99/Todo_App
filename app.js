const dotenv = require('dotenv')
const express = require('express')
const dbConnect = require('./config/DB_connect')
const todo = require("./routes/todo_routes");
dotenv.config()
const app = express()

/*==========================================
    DataBase Connection - dbConnect()
==========================================*/
dbConnect();

/*==========================================
    Middlewares
==========================================*/
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", todo);

module.exports = app;