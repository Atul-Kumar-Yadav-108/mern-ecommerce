import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";

// check signornot
export const requireSignIn = async(req,res,next)=>{
    try {
        const decode = await JWT.verify(req.headers.authorization, process.env.JWT_SECRECT);
        // console.log(decode);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

// admin auth middleware

export const isAdmin = async(req,res,next)=>{
    try {
        const loggedinUser = await userModel.findById(req.user._id);
        if(loggedinUser.role != 1){
            return res.status(200).send({
                success : false,
                message : "Unauthorised access"
            })
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success : false,
            message : "Error in admin middleware"
        })
    }
}