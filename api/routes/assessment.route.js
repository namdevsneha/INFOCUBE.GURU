import express from 'express';
import { saveAssessment } from '../controllers/assessment.controller.js';

const router = express.Router();

router.post('/save', saveAssessment);

export default router;
