
import React from 'react';
import RoadmapMap from '../../components/RoadmapMap';

import Navbar from '../../components/Navbar';

const RoadmapPage = () => {
    return (

        <div className="roadmap-page">
            <h1 className="text-3xl font-bold text-center mb-6">Roadmap to Innovation</h1>
            <Navbar />
            <RoadmapMap />
        </div>
    );
};
export default RoadmapPage;