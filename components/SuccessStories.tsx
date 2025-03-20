"use client";
import React from "react";


const successStories = [
    {
        title: "Tesla's Self-Driving Revolution",
        content: "Tesla has transformed the automotive industry with its AI-driven autonomous driving technology. With over-the-air updates, the company continuously improves its Full Self-Driving (FSD) capabilities, pushing the boundaries of innovation."
    },
    {
        title: "Amazon's AI-Powered Logistics",
        content: "Amazon revolutionized e-commerce with its AI-driven logistics system. The use of machine learning for warehouse automation, predictive shipping, and drone deliveries has significantly improved efficiency and customer satisfaction."
    },
    {
        title: "SpaceX and Reusable Rockets",
        content: "SpaceX disrupted the space industry by developing reusable rocket technology, drastically reducing launch costs. This innovation makes space exploration more sustainable and accessible."
    },
    {
        title: "Apple's M1 Chip Breakthrough",
        content: "Apple moved away from Intel processors to design its own M1 chip, leading to significant improvements in performance, efficiency, and battery life. This innovation reshaped the computing industry."
    },
    {
        title: "Netflix and AI-Driven Recommendations",
        content: "Netflix leverages AI algorithms to analyze user preferences, providing highly personalized content recommendations. This has drastically improved user engagement and retention rates."
    },
    {
        title: "Google's Quantum Computing Milestone",
        content: "Google achieved quantum supremacy by developing a quantum computer capable of solving complex problems exponentially faster than classical computers. This breakthrough has vast implications for cryptography and AI."
    }
];

const SuccessStories: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {successStories.map((story, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
                        <p className="text-gray-700">{story.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;