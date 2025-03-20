"use client";

import React from 'react';
import Link from 'next/link';
import {Search, Brain, Briefcase, Users, ArrowRight, Lightbulb, BookOpen, Trophy, Sparkles} from 'lucide-react';
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
                    <p className="text-xl text-gray-600 mb-2">We’re here to help you support building innovation while carefully assessing risks!</p>

                    <div className="dashboard-grid">
                        {/* Success Stories */}
                        <Link href="/SuccessStories">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-amber-50">
                                        <Trophy className="h-8 w-8 text-amber-600"/>
                                    </div>
                                    <h2 className="card-title">Success Stories</h2>
                                    <p className="card-description">Get inspired by real innovation success stories.</p>
                                    <button className="card-button bg-amber-50 text-amber-700 hover:bg-amber-100">
                                        Read Stories
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Validator */}
                        <Link href="/validator">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-blue-50">
                                        <Brain className="h-8 w-8 text-blue-600"/>
                                    </div>
                                    <h2 className="card-title">Idea Validator</h2>
                                    <p className="card-description">Assess feasibility and potential with AI.</p>
                                    <button className="card-button bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        Validate Idea
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* SWOT*/}
                        <Link href="/swot">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-purple-50">
                                        <Briefcase className="h-8 w-8 text-purple-600"/>
                                    </div>

                                    <h2 className="card-title">SWOT-Analysis</h2>
                                    <p className="card-description">Analyze your opportunity by figuring out strengths, weaknesses, opportunities & threats. </p>
                                    <button className="card-button bg-purple-50 text-purple-700 hover:bg-purple-100">
                                        Access Tool
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Networkig */}
                        <Link href="/networking">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-green-50">
                                        <Users className="h-8 w-8 text-green-600"/>
                                    </div>
                                    <h2 className="card-title">Networking</h2>
                                    <p className="card-description">Connect with innovators, mentors and investors.</p>
                                    <button className="card-button bg-green-50 text-green-700 hover:bg-green-100">
                                        Find Connections
                                    </button>
                                </div>
                            </div>
                        </Link>
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
                            <Link href="/RoadMap">
                                <button className="roadmap-cta group">
                                    View Roadmap
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}