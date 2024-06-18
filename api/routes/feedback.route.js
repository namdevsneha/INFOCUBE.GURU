import  express from "express";
import { feedback, feedbackFetch } from "../controllers/feedback.controller.js";
const router = express.Router();

router.post("/save",feedback)
router.post("/fetch",feedbackFetch)
export default router;