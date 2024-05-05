import mongoose, { Mongoose } from "mongoose";

const userChatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  userMessages: [
    {
      chatId: {
        type: String,
        unique: true,
      },
      date: {
        type: Date,
      },
      lastMessage: {
        type: String,
      },
      userInfo: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
      },
    },
  ]
});

export default mongoose.model("userChats", userChatSchema);
