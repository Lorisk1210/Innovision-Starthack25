"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { BookOpen, Lightbulb, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { useSearchParams } from "next/navigation";
import '../../dashboard.css';
import Navbar from '../../../components/Navbar';

export default function Dashboard() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUserName = localStorage.getItem("userName") || "Guest";
        setUserName(storedUserName);
    }, [userName]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-2">
                        Hi {userName}
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">We’re here to help you generate innovative ideas!</p>

                    <div className="dashboard-grid ">


                        {/* Learning Resources */}
                        <Link href="/LearningResources">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-blue-50">
                                        <BookOpen className="h-8 w-8 text-blue-600"/>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">24+</span>
                                        <span className="stat-label">Resources</span>
                                    </div>
                                    <h2 className="card-title">Learning Resources</h2>
                                    <p className="card-description">Expand your knowledge with our comprehensive collection.</p>
                                    <button className="card-button bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        Browse Library
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Success Stories */}
                        <Link href="/SuccessStories">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-purple-50">
                                        <Trophy className="h-8 w-8 text-purple-600"/>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">8+</span>
                                        <span className="stat-label">Stories</span>
                                    </div>
                                    <h2 className="card-title">Success Stories</h2>
                                    <p className="card-description">Get inspired by real innovation success stories.</p>
                                    <button className="card-button bg-purple-50 text-purple-700 hover:bg-purple-100">
                                        Read Stories
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Idea Generator */}
                        <Link href="/IdeaGenerator">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-green-50">
                                        <Sparkles className="h-8 w-8 text-green-600"/>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-number">∞</span>
                                        <span className="stat-label">Ideas</span>
                                    </div>
                                    <h2 className="card-title">Idea Generator</h2>
                                    <p className="card-description">Transform your thoughts into actionable innovation.</p>
                                    <button className="card-button bg-green-50 text-green-700 hover:bg-green-100">
                                        Generate Ideas
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
