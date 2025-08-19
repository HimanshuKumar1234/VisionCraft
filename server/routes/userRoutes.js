import express from "express"
import {auth} from "../middlewares/auth.js";
import { getUserCreations, getUserPublished, toggleLikedCreation } from "../controllers/userController.js";
// import { use } from "react";

const userRouter = express.Router();
userRouter.get('/get-user-creations',auth,getUserCreations)
userRouter.get('/get-published-creations',auth,getUserPublished)
//userRouter.get('/get-published-creations',auth,getPublishedCreations)
userRouter.post('/toggle-like-creations',auth,toggleLikedCreation)

export default userRouter;