import  express from "express";
import { feedback, feedbackFetch, fetchUserData } from "../controllers/feedback.controller.js";
const router = express.Router();

router.post("/save",feedback)
router.post("/fetch",feedbackFetch)
router.post("/fetchUserData",fetchUserData)

export default router;