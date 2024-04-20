"use client"
import {createContext, useEffect,useContext} from "react"
import {io} from "socket.io-client"
import { getToken } from "../util/localstorage"
import { UserContext } from '../context/userContext'

const SocketContext = createContext()

export const SocketContextProvider = ({children}) => {
    const token = JSON.parse(getToken())
    const {user} = useContext(UserContext)

    useEffect(() => {
        if(user) {
            const socket = io("http://localhost:8000",{
                query:{
                    userId:user.userId
                }
            })
        }
    },[token])
}