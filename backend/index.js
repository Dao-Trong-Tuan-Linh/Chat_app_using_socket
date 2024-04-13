import express from "express"
import dotenv from "dotenv"
import path from "path";

import { app,server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(express.json())

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get('*',(req,res) => {
//     res.sendFile(path.join(__dirname,"frontend","dist","src","app","layout.js"))
// })

server.listen(PORT, () => {
    console.log('server running at http://localhost:5000');
 });



