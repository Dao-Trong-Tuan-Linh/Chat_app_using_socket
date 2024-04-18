import jwt from "jsonwebtoken"
import {StatusCodes} from "http-status-codes"

export const requireSignIn = (req,res,next) => {
    const auth = req.headers.authorization;
    console.log(auth)
    if(auth) {
        const token = auth.split('Bearer ')[1].trim()
        console.log(token)
        if(token) {
            try {
                const user =  jwt.verify(token,process.env.SECRET_KEY)
                req.user = user
                next()
            } catch (error) {
                res.status(StatusCodes.UNAUTHORIZED).json({error:'Token không hợp lệ'})
            }
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({error:'Token chưa hợp lệ'})
        }
    } else {
        res.status(StatusCodes.UNAUTHORIZED).json({error:'Authentication token phải được cung cấp'})
    }
}