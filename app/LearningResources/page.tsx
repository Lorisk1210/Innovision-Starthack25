"use client";

import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import {BookOpen, Lightbulb, CheckCircle, GraduationCap} from 'lucide-react';
import LearningResources from '../../components/LearningResources';
import {
    categories_clueless, categories_hesitant,
    categories_motivated,
    resources_clueless, resources_hesitant,
    resources_motivated
} from "@/public/learning-resource-data";

export default function LearningResourcesPage() {
    const [persona, setPersona] = useState("default");
    const [resource, setResource] = useState("0");
    const [topic, setTopic] = useState("20+");
    const [success, setSuccess] = useState("unlimited");

    useEffect(() => {
        const userPersona = localStorage.getItem("userPersona") || "default";
        setPersona(userPersona);

        if (persona === "clueless") {
            setResource("11");
        } else {
            setResource("12");
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <main className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="bg-blue-50 rounded-2xl overflow-hidden mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="p-8 md:p-12 md:w-3/5">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Discover. Learn. Innovate.
                            </h1>
                            <p className="text-xl text-gray-700 mb-6">
                                Access our collection of curated resources designed to enhance your innovation capabilities
                                and provide actionable insights for your projects.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Expert Curation</h3>
                                        <p className="text-gray-600">Handpicked resources from innovation experts</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Diverse Formats</h3>
                                        <p className="text-gray-600">Books, articles, videos, and interactive tools</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Practical Applications</h3>
                                        <p className="text-gray-600">Content focused on real-world implementation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 p-6 md:p-0">
                            <div className="relative h-64 md:h-full">
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
                                <div className="absolute bottom-12 right-12 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
                                <div className="relative h-full flex items-center justify-center">
                                    <BookOpen className="h-32 w-32 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">{resource}</div>
                        <div className="text-gray-600">Curated Resources</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <Lightbulb className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">{topic}</div>
                        <div className="text-gray-600">Innovation Topics</div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center">
                        <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-gray-900 mb-2">{success}</div>
                        <div className="text-gray-600">Success</div>
                    </div>
                </div>

                {/* Resources Component */}
                <LearningResources />
            </main>
        </div>
    );
}