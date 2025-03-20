"use client";

import React, { useState } from 'react';
import { Search, Filter, Tag, ArrowUpRight, Users, BarChart3, LineChart, Lightbulb, MessageCircle, Layers, Target, TrendingUp, MapPin, ExternalLink, BookOpen, Download } from 'lucide-react';

const ProblemFindingTools = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Tools', count: 15 },
        { id: 'market', name: 'Market Research', count: 4 },
        { id: 'customer', name: 'Customer Insight', count: 5 },
        { id: 'trend', name: 'Trend Analysis', count: 3 },
        { id: 'framework', name: 'Problem Frameworks', count: 3 }
    ];

    const tools = [
        {
            id: 1,
            title: "Customer Empathy Map",
            creator: "IDEO",
            description: "Visualize customer attitudes and behaviors to identify unmet needs and pain points.",
            type: "customer",
            tags: ["User Experience", "Empathy", "Visualization"],
            complexity: "Beginner",
            resources: ["Template", "Guide", "Case Study"],
            link: "#"
        },
        {
            id: 2,
            title: "Problem Statement Canvas",
            creator: "Innovation Labs",
            description: "Structure your problem definition with this framework to ensure you're solving the right problem.",
            type: "framework",
            tags: ["Problem Definition", "Structured Thinking"],
            complexity: "Beginner",
            resources: ["Template", "Guide"],
            link: "#"
        },
        {
            id: 3,
            title: "Trend Radar Analysis",
            creator: "Gartner",
            description: "Identify emerging trends and patterns that could disrupt your industry or create new opportunities.",
            type: "trend",
            tags: ["Forecasting", "Strategic Planning"],
            complexity: "Intermediate",
            resources: ["Template", "Example", "Methodology"],
            link: "#"
        },
        {
            id: 4,
            title: "User Journey Mapping",
            creator: "Nielsen Norman Group",
            description: "Map the entire experience of your users to identify friction points and improvement opportunities.",
            type: "customer",
            tags: ["UX Design", "Service Design"],
            complexity: "Intermediate",
            resources: ["Template", "Guide", "Example"],
            link: "#"
        },
        {
            id: 5,
            title: "Five Whys Technique",
            creator: "Toyota",
            description: "Iteratively ask 'why' to dig deeper into a problem and identify its root cause rather than symptoms.",
            type: "framework",
            tags: ["Root Cause Analysis", "Problem Solving"],
            complexity: "Beginner",
            resources: ["Worksheet", "Methodology"],
            link: "#"
        },
        {
            id: 6,
            title: "Competitor Analysis Matrix",
            creator: "Harvard Business School",
            description: "Compare key competitors across essential dimensions to identify market gaps and opportunities.",
            type: "market",
            tags: ["Competitive Analysis", "Market Research"],
            complexity: "Intermediate",
            resources: ["Template", "Example", "Guide"],
            link: "#"
        },
        {
            id: 7,
            title: "Customer Interview Guide",
            creator: "Stanford d.school",
            description: "Structured approach to interviewing customers to uncover hidden needs and insights.",
            type: "customer",
            tags: ["Qualitative Research", "User Research"],
            complexity: "Beginner",
            resources: ["Interview Script", "Question Bank", "Best Practices"],
            link: "#"
        },
        {
            id: 8,
            title: "Technology Adoption Curve",
            creator: "Everett Rogers",
            description: "Understand how innovations spread through society to identify adoption challenges.",
            type: "trend",
            tags: ["Diffusion of Innovation", "Market Timing"],
            complexity: "Intermediate",
            resources: ["Framework", "Case Studies"],
            link: "#"
        },
        {
            id: 9,
            title: "PESTEL Analysis",
            creator: "Harvard Business School",
            description: "Systematic framework to identify external factors that may create problems or opportunities.",
            type: "framework",
            tags: ["Environmental Analysis", "Strategic Planning"],
            complexity: "Advanced",
            resources: ["Template", "Guide", "Example"],
            link: "#"
        },
        {
            id: 10,
            title: "Market Sizing Calculator",
            creator: "McKinsey & Company",
            description: "Estimate the size and potential of markets to prioritize problem spaces worth pursuing.",
            type: "market",
            tags: ["TAM SAM SOM", "Market Potential"],
            complexity: "Advanced",
            resources: ["Calculator", "Methodology"],
            link: "#"
        },
        {
            id: 11,
            title: "Customer Feedback Analysis",
            creator: "Qualtrics",
            description: "Systematic approach to analyzing customer feedback to identify recurring issues and opportunities.",
            type: "customer",
            tags: ["Voice of Customer", "Feedback Loop"],
            complexity: "Intermediate",
            resources: ["Framework", "Data Collection Templates"],
            link: "#"
        },
        {
            id: 12,
            title: "Industry Value Chain Analysis",
            creator: "Michael Porter",
            description: "Identify inefficiencies and opportunities within your industry's value chain.",
            type: "market",
            tags: ["Value Chain", "Industry Analysis"],
            complexity: "Advanced",
            resources: ["Template", "Guide", "Example"],
            link: "#"
        },
        {
            id: 13,
            title: "Ethnographic Research Guide",
            creator: "IDEO",
            description: "Methods for observing users in their natural environment to uncover unarticulated needs.",
            type: "customer",
            tags: ["Observation", "Field Research"],
            complexity: "Advanced",
            resources: ["Field Guide", "Observation Templates"],
            link: "#"
        },
        {
            id: 14,
            title: "Emerging Technology Radar",
            creator: "ThoughtWorks",
            description: "Track emerging technologies that could solve existing problems or create new possibilities.",
            type: "trend",
            tags: ["Technology Assessment", "Innovation Scouting"],
            complexity: "Intermediate",
            resources: ["Radar Template", "Assessment Criteria"],
            link: "#"
        },
        {
            id: 15,
            title: "Market Opportunity Map",
            creator: "Strategyzer",
            description: "Visual framework to identify underserved segments and whitespace opportunities in the market.",
            type: "market",
            tags: ["Market Mapping", "Opportunity Identification"],
            complexity: "Intermediate",
            resources: ["Canvas", "Guide", "Example"],
            link: "#"
        }
    ];

    const filteredTools = tools.filter(tool => {
        const matchesFilter = activeFilter === 'all' || tool.type === activeFilter;
        const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const getIconForType = (type: string) => {
        switch(type) {
            case 'market':
                return <BarChart3 className="h-6 w-6" />;
            case 'customer':
                return <Users className="h-6 w-6" />;
            case 'trend':
                return <TrendingUp className="h-6 w-6" />;
            case 'framework':
                return <Layers className="h-6 w-6" />;
            default:
                return <Lightbulb className="h-6 w-6" />;
        }
    };

    const getColorForType = (type: string) => {
        switch(type) {
            case 'market':
                return 'text-blue-600 bg-blue-50';
            case 'customer':
                return 'text-green-600 bg-green-50';
            case 'trend':
                return 'text-amber-600 bg-amber-50';
            case 'framework':
                return 'text-purple-600 bg-purple-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    const getComplexityBadgeColor = (complexity: string) => {
        switch(complexity) {
            case 'Beginner':
                return 'bg-green-100 text-green-800';
            case 'Intermediate':
                return 'bg-blue-100 text-blue-800';
            case 'Advanced':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-4">
                Problem-Finding Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Discover tools and frameworks to identify, analyze, and define problems worth solving.
                These resources will help you find innovation opportunities based on real market needs.
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
                        placeholder="Search tools..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                activeFilter === category.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tools Grid */}
            {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredTools.map(tool => (
                        <div key={tool.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-100">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`rounded-full p-3 ${getColorForType(tool.type)}`}>
                                        {getIconForType(tool.type)}
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getComplexityBadgeColor(tool.complexity)}`}>
                                        {tool.complexity}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.title}</h3>
                                <p className="text-gray-600 mb-3">by {tool.creator}</p>
                                <p className="text-gray-700 mb-4">{tool.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tool.tags.map((tag, index) => (
                                        <div key={index} className="flex items-center text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                            <Tag className="h-3 w-3 mr-1" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-100 pt-4 mt-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Resources:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tool.resources.map((resource, index) => (
                                            <div key={index} className="flex items-center text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                                                {resource === "Template" || resource === "Canvas" || resource === "Worksheet" ? (
                                                    <Download className="h-3 w-3 mr-1" />
                                                ) : resource === "Guide" || resource === "Methodology" || resource === "Framework" ? (
                                                    <BookOpen className="h-3 w-3 mr-1" />
                                                ) : (
                                                    <ExternalLink className="h-3 w-3 mr-1" />
                                                )}
                                                {resource}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <a
                                        href={tool.link}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        Access This Tool
                                        <ArrowUpRight className="h-4 w-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl mb-12">
                    <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No tools found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {/* Workshop Banner */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Problem-Finding Workshop</h2>
                    <p className="text-amber-50 mb-6">Join our facilitated workshop to identify the most impactful problems to solve for your business. Our experts will guide you through proven methodologies to uncover hidden opportunities.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-amber-700 px-6 py-3 rounded-md font-semibold hover:bg-amber-50 transition-colors shadow-sm">
                            Book Workshop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemFindingTools;