"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import { Lightbulb, CheckCircle, Search, Target, BarChart3 } from 'lucide-react';
import ProblemFindingTools from '../../components/ProblemFindingTools';

export default function ProblemFindingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="bg-yellow-50 rounded-2xl overflow-hidden mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="p-8 md:p-12 md:w-3/5">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Find Problems Worth Solving
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                The most successful innovations solve real problems. Our curated collection
                                of tools will help you identify, analyze, and validate problem spaces with the
                                highest potential for impact.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Market-Driven Insights</h3>
                                        <p className="text-gray-600">Tools to discover gaps and opportunities in the market</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Customer-Centered Approaches</h3>
                                        <p className="text-gray-600">Methods to uncover user needs and pain points</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Structured Frameworks</h3>
                                        <p className="text-gray-600">Proven techniques to define and validate problem statements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 p-6 md:p-0">
                            <div className="relative h-64 md:h-full">
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
                                <div className="absolute bottom-12 right-12 w-24 h-24 bg-amber-600 rounded-full opacity-20"></div>
                                <div className="relative h-full flex items-center justify-center">
                                    <Search className="h-32 w-32 text-yellow-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Target className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                        <div className="text-gray-600">Problem-Finding Tools</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Lightbulb className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
                        <div className="text-gray-600">Methodology Categories</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
                        <div className="text-gray-600">Complexity Levels</div>
                    </div>
                </div>

                {/* Tools Component */}
                <ProblemFindingTools />
            </main>
        </div>
    );
}