import { StatusCodes } from "http-status-codes";
import user from "../models/userModel.js";

export const searchUserController = async (req, res) => {
  try {
    const { name } = req.query;
    const {id} = req.user
    
    const allUsers = await user.find({});
    let users = []
    if(name) users = allUsers.filter(user => user.name.includes(name) && user._id != id)
    
    res.status(StatusCodes.OK).json({ result: { users } });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Something went wrong" });
  }
};
