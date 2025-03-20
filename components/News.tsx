"use client";
import React from "react";

const newsArticles = [
    {
        title: "AI Breakthrough in Healthcare",
        content: "Researchers have developed an AI model capable of diagnosing rare diseases with unprecedented accuracy. This innovation could revolutionize early detection and treatment options."
    },
    {
        title: "Tesla Unveils Next-Gen Battery Tech",
        content: "Tesla announced a new battery technology that significantly increases range and reduces charging time, making electric vehicles more accessible and efficient."
    },
    {
        title: "Quantum Computing Advances at IBM",
        content: "IBM has achieved a new milestone in quantum computing, bringing us closer to solving complex problems that traditional computers cannot handle."
    },
    {
        title: "Google’s AI Enhances Search Experience",
        content: "Google has introduced an AI-powered search engine update that improves contextual understanding, providing more relevant and precise search results."
    },
    {
        title: "SpaceX Plans Mission to Mars",
        content: "Elon Musk’s SpaceX has announced a timeline for the first human-crewed mission to Mars, aiming to make interplanetary travel a reality."
    },
    {
        title: "Apple’s AR Glasses Set for Release",
        content: "Apple is set to launch its long-awaited AR glasses, blending digital content seamlessly with the real world, transforming industries from gaming to healthcare."
    }
];

const NewsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Latest Innovation News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                        <p className="text-gray-700">{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;