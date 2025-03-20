"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import { Trophy, CheckCircle, Rocket, Building, Users } from 'lucide-react';
import SuccessStories from '../../components/SuccessStories';

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="bg-purple-50 rounded-2xl overflow-hidden mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="p-8 md:p-12 md:w-3/5">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                SME Innovation Success Stories
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                Discover how small and medium-sized enterprises have transformed their businesses
                                through innovative thinking and creative solutions. Get practical inspiration
                                that&#39;s relevant to companies of all sizes.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Relatable Examples</h3>
                                        <p className="text-gray-600">Success stories from companies with limited resources</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Practical Approaches</h3>
                                        <p className="text-gray-600">Solutions that don&#39;t require massive budgets</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Diverse Industries</h3>
                                        <p className="text-gray-600">Innovations across multiple sectors and markets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 p-6 md:p-0">
                            <div className="relative h-64 md:h-full">
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
                                <div className="absolute bottom-12 right-12 w-24 h-24 bg-indigo-600 rounded-full opacity-20"></div>
                                <div className="relative h-full flex items-center justify-center">
                                    <Trophy className="h-32 w-32 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Building className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">8+</div>
                        <div className="text-gray-600">SME Success Stories</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Rocket className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">4</div>
                        <div className="text-gray-600">Innovation Categories</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">25</div>
                        <div className="text-gray-600">Average Team Size</div>
                    </div>
                </div>

                {/* Stories Component */}
                <SuccessStories />
            </main>
        </div>
    );
}