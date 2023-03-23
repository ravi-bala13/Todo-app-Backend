const express = require("express")

const app = express()
app.use(express.json())

const todoController = require("./controllers/todo.controller")

app.use("/todos", todoController)

module.exports = app