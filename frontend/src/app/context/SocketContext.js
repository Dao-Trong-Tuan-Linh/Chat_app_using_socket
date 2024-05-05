"use client"
import {createContext, useEffect,useContext} from "react"
import {io} from "socket.io-client"
import { getToken } from "../util/localstorage"
import { decodeToken } from "../util/localstorage"

const SocketContext = createContext()

export const SocketContextProvider = ({children}) => {
    const token = JSON.parse(getToken())
    const {id} = decodeToken()
    
    useEffect(() => {
        if(token && user) {
            const socket = io("http://localhost:8000",{
                query:{
                    userId:id
                }
            })
        }
    },[token])
}