import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

 export const registerController = async(req,res)=>{
    try {
        const {name, email, password, phone, address, role} = req.body;
        // handling if not present
        if(!name){
            return res.send("Name is required.");
        }
        if(!email){
            return res.send("Email is required.");
        }
        if(!password){
            return res.send("Password is required.");
        }
        if(!phone){
            return res.send("Phone is required.");
        }
        if(!address){
            return res.send("Address is required.");
        }

        //checking user
        const existingUser = await userModel.findOne({email}); 

        // existing user
        if(existingUser){
            return res.status(200).send({
                success : true,
                message : "Already existing please login"
            })
        }
        
        // hashing password
        const hashedPassword =await hashPassword(password);

        const newUser = await userModel({name,email, password : hashedPassword, address, phone, role}).save();
        res.status(200).send({
            success : true,
            message : "Register successfully. Please login",
            newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "Error while Registatration",
            error
        })
    }
}


// login controller
export const loginController= async(req,res)=>{
    try {
        const {email, password} = req.body;

        // check validation
        if(!email || !password){
            return res.status(200).send({
                success : false,
                message : "Invalid email or password"
            })
        }

        // check user
        const existingUser = await userModel.findOne({email});
        if(!existingUser){
            return res.status(200).send({
                success : false,
                message : "User is not register"
            })
        }

        // check password 
        const match = await comparePassword(password, existingUser.password);

        if(!match){
            return res.status(200).send({
                success : false,
                message : "Invalid password"
            })
        }

        const token = await JWT.sign({_id : existingUser._id},process.env.JWT_SECRECT,{expiresIn : '7d'});

        res.status(200).send({
            success : true,
            message : "Login successfull.",
            user : {
                name : existingUser.name,
                email : existingUser.email,
                phone : existingUser.phone,
                address : existingUser.address,
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in login",
            error
        })
    }
}


export const testController = (req,res)=>{
    res.send("Secure route")
}