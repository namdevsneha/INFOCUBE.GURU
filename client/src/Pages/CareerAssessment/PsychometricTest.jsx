import  { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../../url.js";
import { signInSuccess } from "../../Redux/userSlice/userSlice";

const questions = [
  {
    id: "q1",
    prompt: "I enjoy solving logic, math, or analytical puzzles.",
    weights: { analytical: 2, technical: 1 },
  },
  {
    id: "q2",
    prompt: "I express ideas visually through design, video, or storytelling.",
    weights: { creative: 2 },
  },
  {
    id: "q3",
    prompt: "I feel energized when helping people grow or overcome problems.",
    weights: { social: 2, business: 1 },
  },
  {
    id: "q4",
    prompt: "I like building or tinkering with technology and software.",
    weights: { technical: 2, analytical: 1 },
  },
  {
    id: "q5",
    prompt: "I am excited by leading teams and turning ideas into products.",
    weights: { business: 2, social: 1 },
  },
  {
    id: "q6",
    prompt: "I am comfortable interpreting data, charts, and numbers.",
    weights: { analytical: 2, business: 1 },
  },
  {
    id: "q7",
    prompt: "I enjoy creating visuals, motion graphics, or editing videos.",
    weights: { creative: 2, technical: 1 },
  },
  {
    id: "q8",
    prompt: "I prefer hands-on labs, experiments, or building prototypes.",
    weights: { technical: 2, analytical: 1 },
  },
  {
    id: "q9",
    prompt: "I want to start my own venture or manage a business.",
    weights: { business: 2, creative: 1 },
  },
  {
    id: "q10",
    prompt: "I feel confident presenting or persuading an audience.",
    weights: { social: 2, business: 1 },
  },
  {
    id: "q11",
    prompt: "I like troubleshooting systems and finding root causes quickly.",
    weights: { technical: 2, analytical: 1 },
  },
  {
    id: "q12",
    prompt: "I enjoy writing, blogging, or scripting stories.",
    weights: { creative: 2, social: 1 },
  },
];

const traitCareerMap = {
  analytical: ["Data Scientist", "Actuary", "Financial Analyst"],
  technical: ["Software Engineer", "Cybersecurity Analyst", "DevOps Engineer"],
  creative: ["Film Director", "Graphic Designer", "UX Designer"],
  social: ["Psychologist", "Teacher", "HR Specialist"],
  business: ["Product Manager", "Business Analyst", "Startup Founder"],
};

const likertScale = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export default function PsychometricTest() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const initialAnswers = useMemo(() => {
    const defaults = {};
    questions.forEach((q) => {
      defaults[q.id] = 3;
    });
    return defaults;
  }, []);

  const [answers, setAnswers] = useState(initialAnswers);
  const [results, setResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveDone, setSaveDone] = useState(false);

  useEffect(() => {
    if (currentUser?.hasTakenAssessment) {
      navigate("/", { replace: true });
    }
  }, [currentUser?.hasTakenAssessment, navigate]);

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: Number(value) }));
  };

  const scoreAndPredict = () => {
    const traitScores = {};
    questions.forEach((question) => {
      const response = answers[question.id] ?? 3;
      const delta = response - 3;
      Object.entries(question.weights).forEach(([trait, weight]) => {
        traitScores[trait] = (traitScores[trait] || 0) + delta * weight;
      });
    });

    const rankedTraits = Object.entries(traitScores).sort((a, b) => b[1] - a[1]);
    const careerSuggestions = [];

    rankedTraits.forEach(([trait]) => {
      traitCareerMap[trait]?.forEach((career) => {
        if (!careerSuggestions.includes(career) && careerSuggestions.length < 5) {
          careerSuggestions.push(career);
        }
      });
    });

    return { careerSuggestions, traitScores };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveError("");
    setSaveDone(false);
    setSaving(true);

    const { careerSuggestions, traitScores } = scoreAndPredict();
    setResults(careerSuggestions);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    try {
      const response = await axios.post(
        `${baseURL}/api/assessment/save`,
        {
          answers,
          traitScores,
          topCareers: careerSuggestions,
          email: currentUser?.email,
          userId: currentUser?._id,
        },
        { withCredentials: true }
      );
      if (response?.data?.user) {
        dispatch(signInSuccess(response.data.user));
      }
      setSaveDone(true);
    } catch (error) {
      const message = error?.response?.data?.message || "Could not save assessment";
      setSaveError(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-10 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-sm text-slate-500">Welcome aboard</p>
          <h1 className="text-3xl md:text-4xl font-bold">Psychometric Starter Test</h1>
          <p className="text-slate-600 max-w-3xl">
            Answer a few quick prompts so we can suggest the top career directions that match
            how you think, build, and collaborate.
          </p>
        </div>

        {submitted && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-sm uppercase tracking-wide text-slate-500">Your top matches</p>
                <h2 className="text-2xl font-semibold mt-1">Suggested career paths</h2>
              </div>
              <button
                onClick={() => navigate("/", { replace: true })}
                className="px-4 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-slate-100 transition"
              >
                Go to home
              </button>
            </div>
            <div className="mt-3 text-sm text-slate-600">
              {saving && <span>Saving your assessment...</span>}
              {saveDone && !saveError && <span className="text-emerald-700">Saved.</span>}
              {saveError && <span className="text-red-600">{saveError}</span>}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {results.length === 0 && <p className="text-slate-600">No clear pattern yet. Try adjusting responses.</p>}
              {results.map((career, idx) => (
                <div
                  key={career}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center gap-3"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{career}</span>
                    <span className="text-sm text-slate-600">Good fit based on your responses</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl shadow-sm divide-y divide-slate-200">
          <div className="p-6 flex items-center justify-between gap-3 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-wide text-slate-500">Step 1</p>
              <h2 className="text-xl font-semibold">Rate each statement</h2>
              <p className="text-sm text-slate-600">Use the 1-5 scale to capture how true each statement feels for you.</p>
            </div>
            <div className="flex gap-2 text-sm text-slate-600">
              {likertScale.map((item) => (
                <span key={item.value} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  {item.value}: {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {questions.map((question, index) => (
              <div key={question.id} className="p-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-base md:text-lg font-medium">{question.prompt}</p>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4 items-center pl-11">
                  {likertScale.map((item) => (
                    <label key={item.value} className="flex items-center gap-2 cursor-pointer select-none text-sm md:text-base">
                      <input
                        type="radio"
                        name={question.id}
                        value={item.value}
                        checked={answers[question.id] === item.value}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                      />
                      <span className="text-slate-700">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex gap-2 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                12 quick prompts
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                Adaptive suggestions
              </span>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => navigate("/", { replace: true })}
                className="px-5 py-2 rounded-full border border-slate-300 text-sm font-medium hover:bg-slate-100 transition"
              >
                Skip for now
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                See my top careers
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
