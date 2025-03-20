"use client";
import React from 'react';
import RoadmapMap from '../../components/RoadmapMapMotivated';
import Navbar from '../../components/Navbar';
import '/app/roadmap.css';

const RoadmapPage = () => {
    return (
        <div className="roadmap-page bg-gray-50 min-h-screen pb-12">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <RoadmapMap />
            </div>
        </div>
    );
};

export default RoadmapPage;