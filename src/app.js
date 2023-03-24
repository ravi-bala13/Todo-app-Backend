const express = require("express")
const cors = require("cors");


const app = express()
app.use(express.json())


app.use(cors());

const todoController = require("./controllers/todo.controller")

app.use("/todos", todoController)

module.exports = app