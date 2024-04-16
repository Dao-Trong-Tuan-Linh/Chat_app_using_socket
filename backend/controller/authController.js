import {StatusCodes} from "http-status-codes"
import users from "../models/userModel.js"
import { hashPassword } from "../middleware/handlePassword.js"

export const signupController = async (req,res) => {
    try {
        const {name,email,password,avatar} = req.body

        //handle error with name,email,password,avatar
        if(name.length < 3) res.status(StatusCodes.BAD_REQUEST).json({error:'Tên tài khoản cần có độ dài từ 3 ký tự trở lên'})
        if(password.length < 6) res.status(StatusCodes.BAD_REQUEST).json({error:'Mật khẩu cần có độ dài từ 6 ký tự trở lên'})
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!email.match(emailRegex)) res.status(StatusCodes.BAD_REQUEST).json({error:'Email đăng ký chưa hợp lệ'})

        //handle a exist user
        const existUser = await users.findOne({email})
        if(existUser) res.status(StatusCodes.BAD_REQUEST).json({error:'Tài khoản đã tồn tại'})

        //convert password to bcrypt
        const hashedPassword = await hashPassword(password)

        //handle signup successfully
        const user = await users.create({
            name,
            email,
            password:hashedPassword,
            avatar
        })
        if(user) res.status(StatusCodes.CREATED).json({result:'Đã đăng ký thành công'})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:'Something went wrong'})
    }
}