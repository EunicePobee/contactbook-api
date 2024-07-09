import { Router } from "express";
import { addUser, logIn } from "../controllers/user_controller.js";


// Create router
const userRouter = Router();


// Define routes
userRouter.post('/signup', addUser)

userRouter.post('/login', logIn)


// Export router
export default userRouter;