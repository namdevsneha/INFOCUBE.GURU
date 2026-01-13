import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    email: {
      type: String,
    },
    answers: {
      type: Object,
      required: true,
    },
    traitScores: {
      type: Object,
      default: {},
    },
    topCareers: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Assessment = mongoose.model('Assessment', assessmentSchema);

export default Assessment;
