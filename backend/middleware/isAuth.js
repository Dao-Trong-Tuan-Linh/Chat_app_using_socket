import jwt from "jsonwebtoken"
import {StatusCodes} from "http-status-codes"

export const requireSignIn = (req,res,next) => {
    const auth = req.headers.authorization;
    if(auth) {
        const token = auth.split('Bearer ')[1]

        if(token) {
            try {
                const user = jwt.verify(token,process.env.SECRET_KEY)
                return user
            } catch (error) {
                res.status(StatusCodes.UNAUTHORIZED).json({error:'Token không hợp lệ'})
            }
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({error:'Token không hợp lệ'})
        }
    } else {
        res.status(StatusCodes.UNAUTHORIZED).json({error:'Authentication token phải được cung cấp'})
    }
}