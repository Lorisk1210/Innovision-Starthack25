"use client";

import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, Rocket, Lightbulb, Zap, Star, Trophy, Cpu, BarChart3, TrendingUp, Users, ShoppingBag, Droplet, HeartPulse, Leaf } from 'lucide-react';

const SuccessStories = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Stories', count: 8 },
        { id: 'tech', name: 'Technology', count: 2 },
        { id: 'sustainability', name: 'Sustainability', count: 2 },
        { id: 'digital', name: 'Digital Solutions', count: 2 },
        { id: 'health', name: 'Healthcare', count: 2 }
    ];

    const stories = [
        {
            id: 1,
            title: "Revolutionizing Local Food Delivery",
            company: "FreshRoute",
            content: "FreshRoute, a small startup with just 12 employees, created a farm-to-table delivery app connecting local farmers directly with consumers. Their innovative logistics solution reduced food waste by 40% while increasing farmer profits by 25%, transforming the local food ecosystem.",
            type: "digital",
            tags: ["Food Tech", "Local Business"],
            icon: <ShoppingBag />,
            color: "green",
            link: "#"
        },
        {
            id: 2,
            title: "Water Conservation Technology",
            company: "AquaSense",
            content: "AquaSense, a 20-person engineering firm, developed affordable smart water meters for homes and small businesses. Their IoT solution helped customers reduce water consumption by up to 30% through real-time monitoring and leak detection, becoming a game-changer for water conservation.",
            type: "sustainability",
            tags: ["CleanTech", "IoT"],
            icon: <Droplet />,
            color: "blue",
            link: "#"
        },
        {
            id: 3,
            title: "Manufacturing Process Innovation",
            company: "SmartFactory Systems",
            content: "SmartFactory Systems, a 35-employee manufacturing technology company, created an affordable retrofit solution that brings Industry 4.0 capabilities to older machinery. Their system helped small manufacturers increase productivity by 22% while reducing defects by 15%.",
            type: "tech",
            tags: ["Industry 4.0", "Manufacturing"],
            icon: <Zap />,
            color: "amber",
            link: "#"
        },
        {
            id: 4,
            title: "Telemedicine for Underserved Areas",
            company: "RuralHealth Connect",
            content: "RuralHealth Connect, a 15-person healthcare startup, developed a low-bandwidth telemedicine platform specifically designed for rural areas with poor internet connectivity. Their solution brought specialized healthcare to over 50,000 patients in remote regions who previously had limited access.",
            type: "health",
            tags: ["Telemedicine", "Rural Healthcare"],
            icon: <HeartPulse />,
            color: "red",
            link: "#"
        },
        {
            id: 5,
            title: "AI-Powered Inventory Management",
            company: "StockSmart",
            content: "StockSmart, founded by three former retail managers, created an AI inventory management system specifically for small retailers. Their affordable solution reduced inventory costs by 18% while decreasing stockouts by 25%, giving small shops the same advantages as larger retailers.",
            type: "digital",
            tags: ["Retail Tech", "Artificial Intelligence"],
            icon: <BarChart3 />,
            color: "indigo",
            link: "#"
        },
        {
            id: 6,
            title: "Sustainable Packaging Innovation",
            company: "GreenWrap",
            content: "GreenWrap, a 28-employee materials science company, developed biodegradable packaging made from agricultural waste. Their cost-effective sustainable alternative to plastic packaging helped small food producers reduce environmental impact while meeting consumer demand for eco-friendly solutions.",
            type: "sustainability",
            tags: ["Circular Economy", "Materials Science"],
            icon: <Leaf />,
            color: "green",
            link: "#"
        },
        {
            id: 7,
            title: "Accessible 3D Printing Service",
            company: "PrintPro Solutions",
            content: "PrintPro Solutions, a team of just 8 people, created a distributed network of 3D printers with a simple ordering platform. They enabled small businesses to access custom manufacturing without high equipment costs, revolutionizing product development for local entrepreneurs.",
            type: "tech",
            tags: ["Additive Manufacturing", "Distributed Production"],
            icon: <Cpu />,
            color: "purple",
            link: "#"
        },
        {
            id: 8,
            title: "Mental Health Platform for SMEs",
            company: "MindfulWork",
            content: "MindfulWork, a 16-person healthcare startup, developed an affordable mental wellness platform specifically for small businesses. Their solution helped SMEs reduce employee burnout by 30% and improve retention, bringing enterprise-level wellness benefits to smaller organizations.",
            type: "health",
            tags: ["Mental Health", "Employee Wellness"],
            icon: <Users />,
            color: "blue",
            link: "#"
        }
    ];

    const filteredStories = stories.filter(story => {
        const matchesFilter = activeFilter === 'all' || story.type === activeFilter;
        const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            story.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const getColorForType = (color: string) => {
        switch(color) {
            case 'blue':
                return 'text-blue-600 bg-blue-50';
            case 'green':
                return 'text-green-600 bg-green-50';
            case 'red':
                return 'text-red-600 bg-red-50';
            case 'amber':
                return 'text-amber-600 bg-amber-50';
            case 'purple':
                return 'text-purple-600 bg-purple-50';
            case 'indigo':
                return 'text-indigo-600 bg-indigo-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-4">
                SME Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Get inspired by these real-world innovation success stories from small and medium-sized enterprises. See how smaller companies have created big impacts through creative problem-solving and innovative approaches.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search success stories..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex items-center space-x-1 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    <Filter className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex items-center transition-colors ${
                                activeFilter === category.id
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                activeFilter === category.id
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Stories Grid */}
            {filteredStories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {filteredStories.map(story => (
                        <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-100">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`rounded-full p-3 ${getColorForType(story.color)}`}>
                                        {story.icon}
                                    </div>
                                    <div className="flex space-x-2">
                                        {story.tags.map((tag, index) => (
                                            <span key={index} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-1">{story.title}</h3>
                                <p className="text-purple-600 font-medium mb-3">{story.company}</p>
                                <p className="text-gray-700 mb-4">{story.content}</p>

                                <a
                                    href={story.link}
                                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                                >
                                    Read Full Story
                                    <ArrowUpRight className="h-4 w-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl mb-12">
                    <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No stories found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {/* Submit Your Story */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Share Your SME Success Story</h2>
                    <p className="text-purple-100 mb-6">Has your small or medium-sized business achieved an innovation breakthrough? Share your story to inspire other SMEs and be featured in our collection.</p>
                    <button className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-purple-50 transition-colors shadow-sm">
                        Submit Your Story
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;