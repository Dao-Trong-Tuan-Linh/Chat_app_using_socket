import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    chatId:{
        type:String,
        required:true,
        unique: true
    },
    messages:[
        {
            senderId:{
                type:String
            },
            text:{
                type:String
            },
            img:{
                type:String
            },
            date:{
                type:Date
            },
            default:[]
        },
    ]
})

export default mongoose.model('chats',chatSchema)