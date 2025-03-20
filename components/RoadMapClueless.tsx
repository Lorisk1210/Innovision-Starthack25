'use client';

import React, { useState } from 'react';
import '../app/roadmap.css';
import RoadmapTasks from './RoadmapTasks';

const roadmapStations = [
    { id: 1, name: "Problem Identification", progress: 14.29 },
    { id: 2, name: "Ideation & Concept", progress: 28.57 },
    { id: 3, name: "Feasibility Analysis", progress: 42.86 },
    { id: 4, name: "Prototyping", progress: 57.14 },
    { id: 5, name: "Implementation & Deployment", progress: 71.43 },
    { id: 6, name: "Monitoring & Evolution", progress: 85.71 }
    //{ id: 5, name: "Refinement & Scaling", progress: 55.55 },
    //{ id: 5, name: "Business Model", progress: 62.5 },
];

const RoadmapMap = () => {
    const [currentStep, setCurrentStep] = useState(1); // Start bei "Problem Identification"
    const currentPosition = roadmapStations.find(station => station.id === currentStep)?.progress || 0;
    const currentStationName = roadmapStations.find(station => station.id === currentStep)?.name || "";

    return (
        <div className="roadmap-container">
            <h1 className="text-3xl font-bold mb-6">Innovation Roadmap</h1>
            <p className="text-lg text-gray-700 mb-8">
                Innovate in 6 easy steps!
            </p>

            {/* Roadmap visualization */}
            <div className="relative mb-8">
                <img src="/images/roadmap.png" alt="Roadmap" className="roadmap-image"/>
                {roadmapStations.map((station) => (
                    <React.Fragment key={station.id}>
                        <div
                            className={`pin ${station.id <= currentStep ? 'active' : ''}`}
                            style={{left: `${station.progress}%`}}
                            onClick={() => setCurrentStep(station.id)}
                        >
                            {station.id}
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

            {/* Tasks for the current step */}
            <RoadmapTasks currentStep={currentStep} />
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
        6: "Track performance, gather feedback, and continuously improve your innovation based on real-world usage and changing needs."
    };

    return descriptions[stepId] || "Description not available";
}

export default RoadmapMap;