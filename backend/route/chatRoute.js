import express from "express"
import { requireSignIn } from "../middleware/isAuth.js"
import { checkChatIdController, createChatController } from "../controller/chatController.js"
import {createUserChatController, createUserChatWithUserIdController, updateUserChatController,checkUserChatController} from "../controller/userChatController.js"

const router = express.Router()

router.get('/checkChatId/:combinedId',requireSignIn,checkChatIdController)
router.get('/checkUserChat/:id',requireSignIn,checkUserChatController)
router.post('/createChat',requireSignIn,createChatController)
router.post('/createUserChat',requireSignIn,createUserChatController)
router.post('/createUserChatWithUserId',requireSignIn,createUserChatWithUserIdController)
router.post('/updateUserChat',requireSignIn,updateUserChatController)

export default router