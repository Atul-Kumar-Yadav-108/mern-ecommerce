import express from "express";
import {registerController,loginController,testController} from "../controllers/authController.js"
import {isAdmin, requireSignIn} from "../middlewares/authMiddleware.js"

// router object 
 const router = express.Router();

//  register || post method
router.post("/register", registerController);

// login || post method
router.post("/login", loginController);

// test || get method
router.get("/test",requireSignIn,isAdmin, testController);

export default router