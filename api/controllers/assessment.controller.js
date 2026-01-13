import Assessment from '../models/assessment.model.js';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import nodemailer from 'nodemailer';

export const saveAssessment = async (req, res, next) => {
  try {
    const { answers, traitScores, topCareers, email, userId } = req.body;

    if (!answers || typeof answers !== 'object') {
      return next(errorHandler(400, 'answers are required'));
    }

    if (!Array.isArray(topCareers)) {
      return next(errorHandler(400, 'topCareers must be an array'));
    }

    const payload = {
      answers,
      traitScores: traitScores || {},
      topCareers,
    };

    if (req.user?.id) {
      payload.userId = req.user.id;
    } else if (userId) {
      payload.userId = userId;
    }

    if (email) {
      payload.email = email;
    }

    const doc = await Assessment.create(payload);

    let updatedUser = null;
    if (payload.userId || email) {
      const query = payload.userId ? { _id: payload.userId } : { email };
      updatedUser = await User.findOneAndUpdate(query, { hasTakenAssessment: true }, { new: true });
    }

    if (topCareers && topCareers.length > 0) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.MAIL_AUTH,
            pass: process.env.PASS_AUTH,
          },
        });

        const list = topCareers.map((c, idx) => `${idx + 1}. ${c}`).join('\n');
        await transporter.sendMail({
          from: process.env.MAIL_AUTH,
          to: 'sraj95922@gmail.com',
          subject: 'New psychometric assessment saved',
          text: `A user completed the psychometric assessment.\nEmail: ${email || 'N/A'}\nUserId: ${payload.userId || 'N/A'}\nTop careers:\n${list}`,
        });
      } catch (mailErr) {
        console.error('Email failed', mailErr);
      }
    }

    res.status(201).json({ success: true, data: doc, user: updatedUser });
  } catch (error) {
    next(error);
  }
};
