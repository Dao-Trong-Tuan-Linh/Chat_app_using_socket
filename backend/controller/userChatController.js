import chatsModel from "../models/chatsModel.js";
import userChats from "../models/userChatsModel.js";
import { StatusCodes } from "http-status-codes";


export const checkUserChatController = async (req, res) => {
  try {
    const { id } = req.params;

    const userChat = await userChats.findOne({ userId:id });
    if (userChat) {
      res.status(StatusCodes.OK).json({ isCreated: true });
    } else {
      res.status(StatusCodes.OK).json({ isCreated: false });
    }
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};

export const createUserChatController = async (req, res) => {
  try {
    const {id,combinedId,user} = req.body;
    
    const userChat = await userChats.create({
      userId:id,
      userMessages:[
        {chatId:combinedId,userInfo:{id:user._id,name:user.name,avatar:user.avatar}}
      ]
    });
    if (userChat) res.status(StatusCodes.CREATED).json({ result:userChat});
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};

export const createUserChatWithUserIdController = async (req,res) => {
  try {
    const {id,combinedId,user} = req.body;
    const userChatWithUserId = await userChats.findOne({ userId:id });
    const userChatWithUserMessage = userChatWithUserId.userMessages.find(u => u.chatId == combinedId)
   
    
    if(!userChatWithUserMessage) {
      const userChat1 = await userChats.findOneAndUpdate({userId:id},{
        userMessages:[...userChatWithUserId.userMessages,{chatId:combinedId,userInfo:{id:user._id,name:user.name,avatar:user.avatar}}]
      })
      const userChatWithUserId1 = await userChats.findOne({ userId:id });
      const userChatWithUserMessage1 = userChatWithUserId1.userMessages.find(u => u.chatId == combinedId)
      
      res.status(StatusCodes.OK).json({result:userChatWithUserMessage1})
    } else {
      res.status(StatusCodes.OK).json({result:userChatWithUserMessage})
    }
  } catch (error) {
    console.log(error)
  }
}

export const updateUserChatController = async (req,res) => {
  
}
