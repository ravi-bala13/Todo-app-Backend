const connect = require("./config/db")

const app = require("./app.js");

app.listen(8080, async () => {
    await connect()
    console.log("I am listening on port 8080")
})

