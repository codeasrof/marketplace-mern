import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
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
app.use(express.json())

app.listen(3003, () => {
    console.log("Server Started")
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)