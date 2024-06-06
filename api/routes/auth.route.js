import  express from "express";
import {signup,login, google, signOut, signup2, forgotPass, sendOTP} from "../controllers/auth.controller.js"
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/google",google)
router.get("/signout",signOut)
router.post("/signup2",signup2)
router.post("/forgotPass",forgotPass)
router.post("/sendOTP",sendOTP)
export default router;