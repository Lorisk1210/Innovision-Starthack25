"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sprout, TreeDeciduous } from "lucide-react";
import { generateSentimentResponse } from "../services/geminiService";
import { useRouter } from "next/navigation";

const questions = [
    {
        text: "How much do you like to innovate?",
        options: [
            { answer: "I am happy with the status-quo, but let's see what's possible!", persona: "clueless", icon: Leaf },
            { answer: "I see risk in innovating, but with a worked-out concept maybe.", persona: "hesitant", icon: Sprout },
            { answer: "I really want to innovate, but need help in doing so!", persona: "motivated", icon: TreeDeciduous }
        ]
    },
    {
        text: "What is your main source of information, when it comes to business?",
        options: [
            { answer: "I rely on my business network such as suppliers.", persona: "clueless", icon: Leaf },
            { answer: "I like to visit industry events for new information.", persona: "hesitant", icon: Sprout },
            { answer: "I rely on industry news and magazines.", persona: "motivated", icon: TreeDeciduous }
        ]
    },
    {
        text: "How do you usually network?",
        options: [
            { answer: "With phone calls.", persona: "clueless", icon: Leaf },
            { answer: "By Social Media.", persona: "hesitant", icon: Sprout },
            { answer: "Through industry associations.", persona: "motivated", icon: TreeDeciduous }
        ]
    },
];

const progressVariants = {
  initial: { width: "0%" },
  animate: (step: number) => ({
    width: `${((step + 2) / (questions.length + 4)) * 100}%`,
    transition: { duration: 0.5 }
  })
};

export default function Onboarding() {
    const router = useRouter();
    const [step, setStep] = useState(-2);
    const [name, setName] = useState("");
    const [workplace, setWorkplace] = useState("");
    const [responses, setResponses] = useState({ clueless: 0, hesitant: 0, motivated: 0 });
    const [persona, setPersona] = useState<string | null>(null);
    const [description, setDescription] = useState("");

    const handleAnswer = (persona: keyof typeof responses) => {
        setResponses((prev) => ({ ...prev, [persona]: prev[persona] + 1 }));
        setStep((prevStep) => prevStep + 1);
    };

    useEffect(() => {
        if (step === questions.length + 1) {
            const highestPersona = Object.keys(responses).reduce((a, b) =>
                responses[a as keyof typeof responses] > responses[b as keyof typeof responses] ? a : b
            );
            setPersona(highestPersona);
            setStep((prevStep) => prevStep + 1);
        }
    }, [step, responses]);

    const startQuestions = () => setStep(-1);
    const handleNameSubmit = () => name.trim() && setStep(0);
    const handleWorkplaceSubmit = () => workplace.trim() && setStep(1);
    const handleFinalSubmission = async () => {
        try {
            const sentiment = await generateSentimentResponse(description);
            console.log("Sentiment response:", sentiment);

            // Map sentiment value to persona
            const sentimentMap: { [key: string]: keyof typeof responses } = {
                "1\n": "clueless",
                "2\n": "motivated",
                "3\n": "hesitant"
            };

            const sentimentPersona = sentimentMap[sentiment];

            if (!sentimentPersona) {
                console.error("Unexpected sentiment response:", sentiment);
                return;
            }

            // Update responses and determine the final persona
            setResponses((prev) => {
                const updatedResponses = {
                    ...prev,
                    [sentimentPersona]: prev[sentimentPersona] + 3, // Add 3 points
                };

                // Determine the highest-scoring persona
                const highestPersona = Object.keys(updatedResponses).reduce((a, b) =>
                    updatedResponses[a as keyof typeof responses] > updatedResponses[b as keyof typeof responses] ? a : b
                );

                // Redirect after state update
                setTimeout(() => {
                    router.push(`/result?persona=${highestPersona}`);
                }, 100);

                return updatedResponses;
            });
        } catch (error) {
            console.error("Error handling final submission:", error);
        }
    };

    return (
        <div className="gradient-bg min-h-screen p-4 flex flex-col">
            {/* Progress Bar */}
            <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden mb-8">
                <motion.div
                    className="h-full bg-green-500"
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                    custom={step}
                />
            </div>

            <div className="flex flex-row flex-1 max-w-7xl mx-auto gap-8">
                {/* Left Section (Speech Bubble & Questions) */}
                <div className="w-2/3 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="speech-bubble p-10 bg-white rounded-3xl shadow-xl text-foreground"
                        >
                            {step === -2 ? (
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-bold text-green-800">
                                        Hello, I am Olma, your personal guide.
                                    </h1>
                                    <p className="text-xl text-green-700">
                                        To provide you with the best help, I'll ask you a few questions.
                                    </p>
                                    <button
                                        onClick={startQuestions}
                                        className="w-full bg-green-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-green-700 transition-all"
                                    >
                                        Let's Begin
                                    </button>
                                </div>
                            ) : step === -1 ? (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-semibold text-green-800">Hey! What's your name?</h2>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-4 text-lg border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                        placeholder="Enter your name..."
                                    />
                                    <button
                                        onClick={handleNameSubmit}
                                        disabled={!name.trim()}
                                        className="w-full bg-green-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-green-700 transition-all disabled:bg-green-300"
                                    >
                                        Continue
                                    </button>
                                </div>
                            ) : step === 0 ? (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-semibold text-green-800">
                                        Where do you work, {name}?
                                    </h2>
                                    <input
                                        type="text"
                                        value={workplace}
                                        onChange={(e) => setWorkplace(e.target.value)}
                                        className="w-full p-4 text-lg border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                                        placeholder="Enter your workplace..."
                                    />
                                    <button
                                        onClick={handleWorkplaceSubmit}
                                        disabled={!workplace.trim()}
                                        className="w-full bg-green-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-green-700 transition-all disabled:bg-green-300"
                                    >
                                        Continue
                                    </button>
                                </div>
                            ) : step <= questions.length ? (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-semibold text-green-800">
                                        {questions[step - 1].text}
                                    </h2>
                                    <div className="space-y-4">
                                        {questions[step - 1].options.map((option, index) => {
                                            const Icon = option.icon;
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => handleAnswer(option.persona)}
                                                    className="w-full bg-green-50 border-2 border-green-200 text-green-800 text-xl font-semibold py-4 px-8 rounded-xl hover:bg-green-100 transition-all flex items-center gap-4"
                                                >
                                                    <Icon className="w-6 h-6" />
                                                    {option.answer}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : step === questions.length + 2 ? (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-semibold text-green-800">
                                        What comes to mind when you think of innovation and your role in it?
                                    </h2>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full p-4 text-lg border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all h-32"
                                        placeholder="Share your thoughts..."
                                    />
                                    <button
                                        onClick={handleFinalSubmission}
                                        disabled={!description.trim()}
                                        className="w-full bg-green-600 text-white text-xl font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-green-700 transition-all disabled:bg-green-300"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ) : null}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Section (Avatar) */}
                <div className="w-1/3 flex justify-center items-center">
                    <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}