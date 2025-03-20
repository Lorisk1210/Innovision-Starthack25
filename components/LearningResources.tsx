"use client";

import React, {useEffect, useState} from 'react';
import { BookOpen, Video, FileText, Globe, Search, Filter, Tag, ArrowUpRight } from 'lucide-react';
import {
    resources_clueless, resources_motivated, resources_hesitant,
    categories_clueless, categories_motivated, categories_hesitant
} from "@/public/learning-resource-data";

const LearningResources = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [persona, setPersona] = useState("default");

    useEffect(() => {
        const userPersona = localStorage.getItem("userPersona") || "default";
        setPersona(userPersona);
    }, []);

    /*
    const categories = [
        { id: 'all', name: 'All Resources', count: 24 },
        { id: 'books', name: 'Books', count: 8 },
        { id: 'articles', name: 'Articles', count: 10 },
        { id: 'videos', name: 'Videos', count: 6 }
    ];

    const resources = [
        {
            id: 1,
            title: "The Innovator's Dilemma",
            author: "Clayton Christensen",
            description: "A revolutionary book that has changed how we think about innovation in business.",
            type: "books",
            tags: ["Disruptive Innovation", "Business Strategy"],
            level: "Intermediate",
            imageUrl: "/images/Book-The-Innovators-Dilemma.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "Creativity, Inc.",
            author: "Ed Catmull",
            description: "Overcoming the unseen forces that stand in the way of true inspiration.",
            type: "books",
            tags: ["Creative Leadership", "Organizational Culture"],
            level: "All Levels",
            imageUrl: "/images/Book-Creativity-Inc.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "How to Foster an Innovation Culture",
            author: "Harvard Business Review",
            description: "Practical strategies for building a culture that embraces change and innovation.",
            type: "articles",
            tags: ["Culture", "Change Management"],
            level: "Beginner",
            imageUrl: "/images/article1.jpg",
            link: "#"
        },
        {
            id: 4,
            title: "Design Thinking Workshop",
            author: "IDEO",
            description: "A comprehensive workshop on the principles of design thinking and how to apply them.",
            type: "videos",
            tags: ["Design Thinking", "Workshop"],
            level: "Intermediate",
            imageUrl: "/images/video-ideo.jpg",
            link: "#"
        },
        {
            id: 5,
            title: "Zero to One",
            author: "Peter Thiel",
            description: "Notes on startups, or how to build the future by creating something truly new.",
            type: "books",
            tags: ["Startups", "Future Planning"],
            level: "Intermediate",
            imageUrl: "/images/Book-Zero-to-One-by-Peter-Thiel.png",
            link: "#"
        },
        {
            id: 6,
            title: "Blue Ocean Strategy",
            author: "W. Chan Kim & Renée Mauborgne",
            description: "How to create uncontested market space and make the competition irrelevant.",
            type: "books",
            tags: ["Strategic Innovation", "Market Creation"],
            level: "Advanced",
            imageUrl: "/images/Book-Blue-Ocean-Strategy.jpeg",
            link: "#"
        },
        {
            id: 7,
            title: "The Psychology of Innovation",
            author: "Stanford Innovation Review",
            description: "Understanding the cognitive processes behind innovative thinking.",
            type: "articles",
            tags: ["Psychology", "Cognition"],
            level: "Intermediate",
            imageUrl: "/images/article2.jpg",
            link: "#"
        },
        {
            id: 8,
            title: "Building Innovative Teams",
            author: "MIT Sloan Management",
            description: "Strategies for assembling and leading teams that consistently generate innovative ideas.",
            type: "articles",
            tags: ["Team Building", "Leadership"],
            level: "Intermediate",
            imageUrl: "/images/article3.jpg",
            link: "#"
        },
        {
            id: 9,
            title: "The Art of Innovation",
            author: "TED Talk by David Kelley",
            description: "IDEO founder David Kelley talks about how to build your creative confidence.",
            type: "videos",
            tags: ["Creativity", "Confidence"],
            level: "All Levels",
            imageUrl: "/images/video-ted-talk.jpg",
            link: "#"
        },
        {
            id: 10,
            title: "Where Good Ideas Come From",
            author: "Steven Johnson",
            description: "The natural history of innovation and how environments foster creative thinking.",
            type: "books",
            tags: ["Idea Generation", "Creative Process"],
            level: "Beginner",
            imageUrl: "/images/Book-Where-Good-Ideas-Come-From.jpg",
            link: "#"
        },
        {
            id: 11,
            title: "Measuring Innovation Impact",
            author: "McKinsey Quarterly",
            description: "How to effectively measure and evaluate the impact of innovation initiatives.",
            type: "articles",
            tags: ["Metrics", "Evaluation"],
            level: "Advanced",
            imageUrl: "/images/article4.jpg",
            link: "#"
        },
        {
            id: 12,
            title: "Innovation Master Class",
            author: "Alex Osterwalder",
            description: "A comprehensive masterclass on business model innovation and value proposition design.",
            type: "videos",
            tags: ["Business Models", "Value Proposition"],
            level: "Advanced",
            imageUrl: "/images/video-corporate-innovation-masterclass.jpg",
            link: "#"
        }
    ];
     */

    const resources =
        persona === "clueless" ? resources_clueless
        : persona === "motivated" ? resources_motivated
        : persona === "hesitant" ? resources_hesitant : [{}];

    const categories =
        persona === "clueless" ? categories_clueless
        : persona === "motivated" ? categories_motivated
        : persona === "hesitant" ? categories_hesitant : [{}];

    const filteredResources = resources.filter(resource => {
        const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const getIconForType = (type: string) => {
        switch(type) {
            case 'books':
                return <BookOpen className="h-6 w-6" />;
            case 'videos':
                return <Video className="h-6 w-6" />;
            case 'articles':
                return <FileText className="h-6 w-6" />;
            default:
                return <Globe className="h-6 w-6" />;
        }
    };

    const getColorForType = (type: string) => {
        switch(type) {
            case 'books':
                return 'text-blue-600 bg-blue-50';
            case 'videos':
                return 'text-green-600 bg-green-50';
            case 'articles':
                return 'text-amber-600 bg-amber-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    const getLevelBadgeColor = (level: string) => {
        switch(level) {
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
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-4 pb-2">
                Learning Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Expand your innovation knowledge with our curated collection of high-quality resources.
                Discover books, articles, and videos that will inspire your next breakthrough.
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
                        placeholder="Search resources..."
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

            {/* Resource Grid */}
            {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredResources.map(resource => (
                        <div key={resource.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-100">
                            <div className="relative h-48 bg-gray-200">
                                <img
                                    src={resource.imageUrl}
                                    alt={resource.title}
                                    className={`w-full h-full ${resource.type === 'books' ? 'object-contain p-2' : 'object-cover'}`}
                                />
                                <div className={`absolute top-3 right-3 ${getColorForType(resource.type)} rounded-full p-2`}>
                                    {getIconForType(resource.type)}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelBadgeColor(resource.level)}`}>
                                        {resource.level}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{resource.title}</h3>
                                <p className="text-gray-600 mb-3">by {resource.author}</p>
                                <p className="text-gray-700 mb-4">{resource.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {resource.tags.map((tag, index) => (
                                        <div key={index} className="flex items-center text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                            <Tag className="h-3 w-3 mr-1" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={resource.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                    View Resource
                                    <ArrowUpRight className="h-4 w-4 ml-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl mb-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No resources found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            )}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Resources</h2>
                    <p className="text-blue-100 mb-6">Join our newsletter to receive weekly updates on new innovation resources, case studies, and exclusive content.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningResources;