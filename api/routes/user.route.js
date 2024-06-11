import  express from "express";
import {test, updatePassword, updateUser} from "../controllers/user.controller.js"
import { verfiyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.get('/',test)

router.post('/updateProfile/:id',verfiyToken,updateUser);
router.post('/updatePassword',updatePassword);

export default router;