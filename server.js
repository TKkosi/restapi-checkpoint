import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import connectDB from "./db/db.js"
import userRouter from "./routes/user.routes.js"
import User from "./models/user.model.js"
import cors from "cors"

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRouter)
app.get("/", (req, res) => {
    res.send("API is running")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

