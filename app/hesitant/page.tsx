"use client";

import React from 'react';
import { Book, Shield, Handshake, BarChart, ArrowRight } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import '../dashboard.css';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
    const searchParams = useSearchParams();
    const name = searchParams.get("name");

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-2">
                        Hi {name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">Empowering your innovation journey with tools, mentorship, and insights!</p>

                    <div className="dashboard-grid">
                        <div className="dashboard-card">
                            <div className="card-content">
                                <div className="icon-wrapper bg-yellow-50">
                                    <Book className="h-8 w-8 text-yellow-600"/>
                                </div>
                                <h2 className="card-title">Low-Risk Innovation Case Studies</h2>
                                <p className="card-description">Learn from real-world examples of low-risk innovation to guide your process.</p>
                                <button className="card-button bg-yellow-50 text-yellow-700 hover:bg-yellow-100">
                                    Explore Case Studies
                                </button>
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <div className="card-content">
                                <div className="icon-wrapper bg-blue-50">
                                    <Shield className="h-8 w-8 text-blue-600"/>
                                </div>
                                <h2 className="card-title">Safe Test Environment</h2>
                                <p className="card-description">Experiment with ideas in a controlled, low-risk environment before full-scale launch.</p>
                                <button className="card-button bg-blue-50 text-blue-700 hover:bg-blue-100">
                                    Test Your Ideas
                                </button>
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <div className="card-content">
                                <div className="icon-wrapper bg-green-50">
                                    <Handshake className="h-8 w-8 text-green-600"/>
                                </div>
                                <h2 className="card-title">Mentorship Matching</h2>
                                <p className="card-description">Connect with experienced mentors to guide you through your innovation journey.</p>
                                <button className="card-button bg-green-50 text-green-700 hover:bg-green-100">
                                    Find a Mentor
                                </button>
                            </div>
                        </div>

                        <div className="dashboard-card">
                            <div className="card-content">
                                <div className="icon-wrapper bg-purple-50">
                                    <BarChart className="h-8 w-8 text-purple-600"/>
                                </div>
                                <h2 className="card-title">Risk Assessment Tool</h2>
                                <p className="card-description">Evaluate potential risks and discover strategies to minimize them effectively.</p>
                                <button className="card-button bg-purple-50 text-purple-700 hover:bg-purple-100">
                                    Assess Risks
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="roadmap-section">
                        <div className="roadmap-content">
                            <div className="roadmap-text">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                    Explore Innovation Roadmap
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Navigate your journey through innovation with our comprehensive roadmap.
                                    Discover strategic pathways and unlock your creative potential.
                                </p>
                            </div>
                            <button className="roadmap-cta group">
                                View Roadmap
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
