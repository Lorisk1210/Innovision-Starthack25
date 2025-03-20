'use client';

import React, { useEffect } from 'react';
import RoadmapMap from '../../components/RoadmapMapClueless';
import Navbar from '../../components/Navbar';
// Ensure correct import path for CSS
import '../../app/roadmap.css';

const RoadmapCluelessPage = () => {
    // Add cleanup to ensure no modal state persists
    useEffect(() => {
        // Add class to body to enable roadmap-specific CSS
        document.body.classList.add('has-roadmap');

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove('has-roadmap');

            // Remove any lingering modal elements manually (extreme fallback)
            const modals = document.querySelectorAll('.modal-backdrop, .completion-modal, .completion-modal-backdrop');
            modals.forEach(modal => {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            });
        };
    }, []);

    // Add a transparent overlay that doesn't capture clicks but exists in the DOM
    // This can help reorganize stacking contexts
    const clickThroughOverlay = (
        <div
            className="click-through-overlay"
            style={{
                pointerEvents: 'none',
                position: 'fixed',
                inset: 0,
                zIndex: 5000
            }}
        />
    );

    return (
        <div className="roadmap-page bg-gray-50 min-h-screen pb-12">
            {clickThroughOverlay}
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <RoadmapMap />
            </div>
        </div>
    );
};

export default RoadmapCluelessPage;