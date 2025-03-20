"use client";
import React from "react";

const costAnalysisData = {
    project: "Next-Gen AI Assistant",
    company: "Tech Solutions Inc.",
    estimatedCosts: [
        { category: "Research & Development", cost: "$500,000" },
        { category: "AI Model Training", cost: "$350,000" },
        { category: "Cloud Infrastructure", cost: "$200,000" },
        { category: "Marketing & Distribution", cost: "$150,000" },
        { category: "Legal & Compliance", cost: "$100,000" }
    ],
    totalCost: "$1,300,000",
    projectedROI: "Expected return of 3x within 5 years based on market analysis."
};

const CostAnalysisPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Cost Analysis</h1>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">{costAnalysisData.project}</h2>
                <p className="text-gray-700 mb-4">Company: {costAnalysisData.company}</p>
                <h3 className="text-xl font-semibold mb-3">Breakdown of Estimated Costs:</h3>
                <ul className="mb-4">
                    {costAnalysisData.estimatedCosts.map((item, index) => (
                        <li key={index} className="text-gray-800">
                            <strong>{item.category}:</strong> {item.cost}
                        </li>
                    ))}
                </ul>
                <h3 className="text-xl font-semibold">Total Estimated Cost: {costAnalysisData.totalCost}</h3>
                <p className="text-gray-700 mt-4">{costAnalysisData.projectedROI}</p>
            </div>
        </div>
    );
};

export default CostAnalysisPage;
