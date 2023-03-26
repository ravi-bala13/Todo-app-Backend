const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    id: {type: String, require: true},
    text: {type: String, require: false},
    isComplete: {type: Boolean, default: false}
})

const Todos = mongoose.model("todo", todoSchema)

module.exports = Todos