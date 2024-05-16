import  express from "express";
import {signup,login, google, signOut, signup2} from "../controllers/auth.controller.js"
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/google",google)
router.get("/signout",signOut)
router.post("/signup2",signup2)
export default router;