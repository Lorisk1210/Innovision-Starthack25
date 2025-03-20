"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Search, Brain, Briefcase, Users, ArrowRight, Lightbulb, BookOpen, Trophy, Sparkles} from 'lucide-react';
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
                    <p className="text-xl text-gray-600 mb-2">We’re here to help you build and validate innovative ideas!</p>

                    <div className="dashboard-grid">


                        {/* Validator */}
                        <Link href="/ideavalidator">
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

                        {/* Business*/}
                        <Link href="/business">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-purple-50">
                                        <Briefcase className="h-8 w-8 text-purple-600"/>
                                    </div>

                                    <h2 className="card-title">Business-Tools</h2>
                                    <p className="card-description">Analyze your opportunity with business tools </p>
                                    <button className="card-button bg-purple-50 text-purple-700 hover:bg-purple-100">
                                        Access Tools
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Networkig */}
                        <Link href="/ecosystem">
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
                            <Link href="/RoadMapMotivated">
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