"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {Search, Brain, Briefcase, Users, ArrowRight, Lightbulb, BookOpen, Trophy, Sparkles} from 'lucide-react';
import { useSearchParams } from "next/navigation";
import '../dashboard.css';
import Navbar from '../../components/Navbar';

export default function Business() {
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
                    <p className="text-xl text-gray-600 mb-2">Here you have tools to analyze your opportunity.</p>

                    <div className="dashboard-grid">


                        {/* SWOT */}
                        <Link href="/business/swot">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-blue-50">
                                        <Brain className="h-8 w-8 text-blue-600"/>
                                    </div>
                                    <h2 className="card-title">SWOT-Analysis</h2>
                                    <p className="card-description">Analyze your opportunity by figuring out strengths, weaknesses, etc.</p>
                                    <button className="card-button bg-blue-50 text-blue-700 hover:bg-blue-100">
                                        Validate Idea
                                    </button>
                                </div>
                            </div>
                        </Link>

                        {/* Kanban*/}
                        <Link href="/business/kanban">
                            <div className="dashboard-card cursor-pointer">
                                <div className="card-content">
                                    <div className="icon-wrapper bg-purple-50">
                                        <Briefcase className="h-8 w-8 text-purple-600"/>
                                    </div>

                                    <h2 className="card-title">Kanban-Board</h2>
                                    <p className="card-description">Keep track of ToDo's </p>
                                    <button className="card-button bg-purple-50 text-purple-700 hover:bg-purple-100">
                                        Access Tool
                                    </button>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </main>
        </div>
    );
}