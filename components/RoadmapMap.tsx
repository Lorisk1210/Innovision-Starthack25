'use client';

import React, { useState } from 'react';
import '../app/roadmap.css';

const roadmapStations = [
    { id: 1, name: "Problem Identification", progress: 11.11 },
    { id: 2, name: "Ideation & Concept", progress: 22.22 },
    { id: 3, name: "Feasibility Analysis", progress: 33.33 },
    { id: 4, name: "Prototyping", progress: 44.44 },
    { id: 5, name: "Refinement & Scaling", progress: 55.55 },
    { id: 6, name: "Business Model", progress: 66.66 },
    { id: 7, name: "Implementation & Deployment", progress: 77.77 },
    { id: 8, name: "Monitoring & Evolution", progress: 88.88 },
];

const RoadmapMap = () => {
    const [currentStep, setCurrentStep] = useState(1); // Start bei "Problem Identification"
    const currentPosition = roadmapStations.find(station => station.id === currentStep)?.progress || 0;

    return (
        <div className="roadmap-container">
            <img src="/images/roadmap.png" alt="Roadmap" className="roadmap-image" />
            {roadmapStations.map((station) => (
                <React.Fragment key={station.id}>
                    <div
                        className={`pin ${station.id <= currentStep ? 'active' : ''}`}
                        style={{ left: `${station.progress}%` }}
                        onClick={() => setCurrentStep(station.id)}
                    >
                        {station.id}
                    </div>
                    <div
                        className="step-label"
                        style={{ left: `${station.progress}%` }}
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
                style={{ left: `${currentPosition}%` }}
            />
        </div>
    );
};

export default RoadmapMap;
