import express from "express"
import { createServer } from 'node:http';
import {Server} from "socket.io"

const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:['GET','POST']
    }
})

export {app, io, server}