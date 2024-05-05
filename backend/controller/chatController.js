import chats from "../models/chatsModel.js";
import { StatusCodes } from "http-status-codes";

export const checkChatIdController = async (req, res) => {
  try {
    const { combinedId } = req.params;

    const chat = await chats.findOne({ chatId: combinedId });
    if (chat) {
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

export const createChatController = async (req, res) => {
  try {
    const { combinedId } = req.body;
    console.log(combinedId);
    const chat = await chats.create({
      chatId: combinedId,
    });
    if (chat) res.status(StatusCodes.CREATED).json({ result:'ok'});
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};
