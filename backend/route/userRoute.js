import express from "express"
import { requireSignIn } from "../middleware/isAuth.js"
import { searchUserController } from "../controller/userController.js"


const router = express.Router()

router.get('/searchUser',requireSignIn,searchUserController)


export default router