"use client";
import React from "react";
import OverviewFlow from "@/components/graph";

const IdeaGenerator: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Idea Generator</h1>
            <p className="text-lg text-gray-700">
                Get inspired and generate new innovative ideas. This section will help
                you brainstorm and develop creative solutions.
            </p>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <OverviewFlow/>
            </div>
        </div>
    );
};

export default IdeaGenerator;
