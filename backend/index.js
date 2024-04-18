import express from "express"
import dotenv from "dotenv"
import path from "path";
import cors from "cors"
import morgan from "morgan";

import { app,server } from "./socket/socket.js";
import connectDB from "./db/db.js";

import auth from "./route/authRoute.js"
const PORT = process.env.PORT || 8000

const __dirname = path.resolve()

//configure env
dotenv.config()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',auth)
// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get('*',(req,res) => {
//     res.sendFile(path.join(__dirname,"frontend","dist","src","app","layout.js"))
// })

server.listen(PORT, () => {
    connectDB()
    console.log('server running at http://localhost:8000');
 });



