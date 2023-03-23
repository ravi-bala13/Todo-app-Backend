const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    name: {type: String, require: false}
})

const Todos = mongoose.model("todo", todoSchema)

module.exports = Todos