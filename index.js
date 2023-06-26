const express = require('express')
const { connection } = require('./config/db')
const { userRoute } = require('./routes/User.routes')
const { FoodRoute } = require('./routes/Food.routes')


const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.use("/users", userRoute)
app.use("/foods", FoodRoute)

app.listen(8080, async () => {
    try {
        await connection
        console.log("DB connected")
    } catch (err) {
        console.log("DB not connected")
    }
    console.log("Server porting at 8080")
})