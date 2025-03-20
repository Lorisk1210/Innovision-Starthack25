'use client';

import React, { useState } from 'react';
import '../app/roadmap.css';
import RoadmapTasks from './RoadmapTasks';


const roadmapStations = [
    { id: 1, name: "Problem Identification", progress: 12.5 },
    { id: 2, name: "Ideation & Concept", progress: 25.0 },
    { id: 3, name: "Feasibility Analysis", progress: 37.5 },
    { id: 4, name: "Prototyping", progress: 50.0 },
    { id: 5, name: "Business Model", progress: 62.5 },
    { id: 6, name: "Implementation & Deployment", progress: 75.0 },
    { id: 7, name: "Monitoring & Evolution", progress: 87.5 },
];

const RoadmapMap = () => {
    const [currentStep, setCurrentStep] = useState(1); // Start bei "Problem Identification"
    const [showCompletionMessage, setShowCompletionMessage] = useState(false);
    const [confetti, setConfetti] = useState<{id: number, color: string, left: string, animationDuration: string}[]>([]);
    const [stepProgress, setStepProgress] = useState<Record<number, number>>({
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
    });

    const currentPosition = roadmapStations.find(station => station.id === currentStep)?.progress || 0;
    const currentStationName = roadmapStations.find(station => station.id === currentStep)?.name || "";

    // Function to create confetti effect
    const createConfetti = () => {
        const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
        const confettiPieces = [];

        for (let i = 0; i < 50; i++) {
            confettiPieces.push({
                id: i,
                color: colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`
            });
        }

        setConfetti(confettiPieces);

        // Remove confetti after animation
        setTimeout(() => {
            setConfetti([]);
        }, 5000);
    };

    // Function to handle step completion
    const handleStepComplete = (completedStepId: number) => {
        // Show completion celebration
        setShowCompletionMessage(true);
        createConfetti();

        // Only proceed if there's a next step available
        if (completedStepId < roadmapStations.length) {
            // Auto-advance to next step after showing celebration message
            setTimeout(() => {
                setCurrentStep(completedStepId + 1);
                setShowCompletionMessage(false);
            }, 2000);
        } else {
            // If this is the final step, show completion message longer
            setTimeout(() => {
                setShowCompletionMessage(false);
            }, 3000);
        }
    };

    return (
        <div className="roadmap-container">
            {/* Confetti effect */}
            {confetti.map(piece => (
                <div
                    key={piece.id}
                    className="confetti"
                    style={{
                        left: piece.left,
                        backgroundColor: piece.color,
                        animationDuration: piece.animationDuration,
                        top: '-10px'
                    }}
                />
            ))}
            <h1 className="text-3xl font-bold mb-6">Innovation Roadmap</h1>
            <p className="text-lg text-gray-700 mb-8">
                Innovate in 7 easy steps!
            </p>

            {/* Roadmap visualization */}
            <div className="relative mb-8">
                <img src="/images/roadmap.png" alt="Roadmap" className="roadmap-image"/>
                {roadmapStations.map((station) => (
                    <React.Fragment key={station.id}>
                        <div
                            className={`pin ${station.id <= currentStep ? 'active' : ''} ${stepProgress[station.id] === 100 ? 'completed' : ''}`}
                            style={{left: `${station.progress}%`}}
                            onClick={() => setCurrentStep(station.id)}
                        >
                            {stepProgress[station.id] === 100 ? '✓' : station.id}
                            {stepProgress[station.id] > 0 && stepProgress[station.id] < 100 && (
                                <div className="pin-progress" style={{ width: `${stepProgress[station.id]}%` }}></div>
                            )}
                        </div>
                        <div
                            className="step-label"
                            style={{left: `${station.progress}%`}}
                            onClick={() => setCurrentStep(station.id)}
                        >
                            {station.name}
                        </div>
                    </React.Fragment>
                ))}
                <img
                    src="/images/car.png"
                    alt="Car"
                    className="car-icon"
                    style={{left: `${currentPosition}%`}}
                />
            </div>

            {/* Current step information */}
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    Step {currentStep}: {currentStationName}
                </h2>
                <p className="text-blue-700">
                    {getStepDescription(currentStep)}
                </p>
            </div>

            {/* Completion message notification */}
            {showCompletionMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 modal-backdrop">
                    <div className="bg-white p-8 rounded-xl shadow-2xl transform transition-all scale-animation">
                        <div className="text-center">
                            <div className="inline-block p-3 rounded-full bg-green-100 text-green-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {currentStep < roadmapStations.length ? "Step Completed!" : "All Steps Completed!"}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {currentStep < roadmapStations.length
                                    ? `Great job! Moving to the next step: ${roadmapStations.find(s => s.id === currentStep + 1)?.name}`
                                    : "Congratulations! You've completed the entire innovation journey!"}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tasks for the current step */}
            <RoadmapTasks
                currentStep={currentStep}
                onStepComplete={handleStepComplete}
                onProgressUpdate={(stepId, progress) => {
                    setStepProgress(prev => ({
                        ...prev,
                        [stepId]: progress
                    }));
                }}
            />
        </div>
    );
};

// Helper function to get step descriptions
function getStepDescription(stepId: number): string {
    const descriptions: Record<number, string> = {
        1: "Identify and define the problem your innovation will solve. This involves research, user interviews, and market analysis to understand pain points and needs.",
        2: "Generate creative ideas and develop initial concepts. Focus on brainstorming solutions without constraints, then refine them into viable concepts.",
        3: "Evaluate if your concept is technically, financially, and operationally feasible. Analyze risks, resources required, and potential return on investment.",
        4: "Create a working model or representation of your solution. This can range from simple mockups to functional prototypes that can be tested with users.",
        5: "Develop and deploy your innovation. This involves building the actual solution, preparing for launch, and releasing it to users.",
        6: "Track performance, gather feedback, and continuously improve your innovation based on real-world usage and changing needs.",
        7: "Monitor the performance of your innovation in the real world. Collect data, analyze feedback, and make necessary adjustments to ensure long-term success."
    };

    return descriptions[stepId] || "Description not available";
}

export default RoadmapMap;