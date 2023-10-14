import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(`An error was occured: ${err}`)
    })

const app = express()


app.listen(3003, () => {
    console.log("Server Started")
})

app.get("/test", (req, res) => {
    res.send("Hello")
})