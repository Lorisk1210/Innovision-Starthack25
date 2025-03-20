'use client';

import React, { useState } from 'react';
import '../app/roadmap.css';

const roadmapStations = [

    //{ id: 1, name: "Problem Identification", progress: 11.11 },
    //{ id: 2, name: "Ideation & Concept", progress: 22.22 },
    { id: 1, name: "Feasibility Analysis", progress: 14.29 },
    { id: 2, name: "Prototyping", progress: 28.57 },
    { id: 3, name: "Refinement & Scaling", progress: 42.86 },
    { id: 4, name: "Business Model", progress: 57.14 },
    { id: 5, name: "Implementation & Deployment", progress: 71.43 },
    { id: 6, name: "Monitoring & Evolution", progress: 85.71 },
];

const RoadmapMap = () => {
    const [currentStep, setCurrentStep] = useState(1); // Start bei "Problem Identification"
    const currentPosition = roadmapStations.find(station => station.id === currentStep)?.progress || 0;

    return (
        <div className="roadmap-container">
            <h1 className="text-3xl font-bold mb-6">Innovation Roadmap</h1>
            <p className="text-lg text-gray-700">
                Innovate in 6 easy steps!
            </p>
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
    );
};

export default RoadmapMap;
