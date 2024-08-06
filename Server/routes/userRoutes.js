import express from "express";
import userControllers from "../userControllers.js";
const { signup, login, verifyEmail } = userControllers;
import saveUser from "../Middlewares/userAuth.js";
const router = express.Router();

//signup
router.post("/signup", saveUser, signup)
//log in
router.post("/login", login)

//email verification
router.get('/verify-email/:id/:token', verifyEmail)

export default router

