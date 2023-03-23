const express = require("express")

const app = express()
app.use(express.json())

app.get("/", () => "hello")

module.exports = app