"use client";

import React, { useState } from 'react';
import {
    Search,
    Filter,
    ArrowUpRight,
    Rocket,
    Lightbulb,
    Zap,
    Star,
    Trophy,
    Cpu,
    BarChart3,
    TrendingUp,
    Users,
    ShoppingBag,
    Droplet,
    HeartPulse,
    Leaf,
    Car, Plane, Factory
} from 'lucide-react';
import {Eater} from "next/dist/compiled/@next/font/dist/google";

const SuccessStories = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', name: 'All Stories', count: 8 },
        { id: 'tech', name: 'Technology', count: 3 },
        { id: 'sustainability', name: 'Sustainability', count: 2 },
        { id: 'digital', name: 'Digital Solutions', count: 2 },
        { id: 'health', name: 'Healthcare', count: 1 }
    ];

    const stories = [
        {
            id: 1,
            title: "Siemens: Introduction of the “Siemens Industrial Copilot",
            company: "Siemens",
            content: "Siemens, a leading company in factory automation, has developed the “Siemens Industrial Copilot,” a generative AI product that enables the programming of industrial robots in natural language. This innovation significantly improves production efficiency and strengthens Siemens’ position in the global market.",
            type: "digital",
            tags: ["Industry 4.0", "Automation"],
            icon: <Factory />,
            color: "green",
            link: "https://www.welt.de/wirtschaft/plus253848052/Siemens-riesiger-Vorteil-im-Rennen-um-die-Weltspitze-verbirgt-sich-in-einer-kleinen-Box.html"
        },
        {
            id: 2,
            title: "Airbus: Modernization of Production with the A321XLR",
            company: "Airbus",
            content: "Airbus has modernized its production processes in Hamburg-Finkenwerder with the introduction of the long-haul aircraft A321XLR. Through precise and automated logistics as well as the use of specialized robotics, assembly processes have been digitalized, increasing efficiency. These measures allow Airbus to respond more flexibly to market demands and reduce production costs.",
            type: "tech",
            tags: ["Aerospace", "Manufacturing"],
            icon: <Plane />,
            color: "blue",
            link: "https://www.welt.de/regionales/hamburg/article253946928/Luftfahrt-Die-neue-Logik-des-Fliegens.html"
        },
        {
            id: 3,
            title: "Bosch and Continental: Integration of Voice AI in Vehicles",
            company: "Bosch",
            content: "Automotive suppliers Bosch and Continental have integrated voice AI technologies, such as ChatGPT, into vehicles. This development enhances human-machine interaction and provides drivers with new features that improve comfort and safety. By adopting these technologies early, both companies strengthen their competitive position in the automotive industry.",
            type: "digital",
            tags: ["Automotive", "Voice AI"],
            icon: <Car />,
            color: "amber",
            link: "https://www.welt.de/wirtschaft/webwelt/plus253972592/Bosch-und-Conti-zeigen-wie-die-neue-Aera-in-der-Autoindustrie-begonnen-hat.html"
        },
        {
            id: 4,
            title: "LEROSH: Robots for the Craft Sector",
            company: "LEROSH",
            content: "The LEROSH project (“Learning Robotic Grinding Technology for the Craft Sector”) is developing a robotic arm capable of performing grinding and polishing tasks. This innovation addresses the skilled labor shortage in the craft sector by automating repetitive tasks, allowing professionals to focus on more complex work. With its easy teachability and no need for programming knowledge, the technology is accessible to smaller businesses.",
            type: "tech",
            tags: ["Craftsmanship", "Robotics"],
            icon: <Factory />,
            color: "blue",
            link: "https://www.bild.de/leben-wissen/digital/ki-in-der-werkstatt-dieser-roboter-azubi-soll-das-deutsche-handwerk-retten-66b1dd842af40b41bb48f9c2"
        },
        {
            id: 5,
            title: "New Roots: Vegan Cheese from Switzerland",
            company: "New Roots",
            content: "New Roots, a company based in Bern, Switzerland, produces nut-based vegan cheese and supplies major retailers both domestically and internationally. Their innovative approach to plant-based dairy alternatives has made them a leader in the sustainable food industry.",
            type: "sustainability",
            tags: ["Sustainability", "Vegan"],
            icon: <ShoppingBag/>,
            color: "green",
            link: "https://www.handelszeitung.ch/bilanz/top-innovativeunternehmen-2025"
        },
        {
            id: 6,
            title: "Sonova: AI-Powered Hearing Aids",
            company: "Sonova",
            content: "Sonova Group develops advanced hearing aids that use artificial intelligence to enhance speech comprehension. This innovation significantly improves the quality of life for people with hearing loss, setting new standards in the audiology industry.",
            type: "health",
            tags: ["Healthcare", "AI"],
            icon: <HeartPulse />,
            color: "red",
            link: "https://www.handelszeitung.ch/bilanz/top-innovativeunternehmen-2025"
        },
        {
            id: 7,
            title: "ABB: Genix Copilot for Industrial Optimization",
            company: "ABB",
            content: "ABB has transformed the industrial landscape with its Genix Copilot, leveraging Azure OpenAI services to enhance operational efficiency. The solution reduces operating and maintenance costs by up to 30% and decreases service requests by 80% through self-service capabilities.",
            type: "tech",
            tags: ["Industry 4.0", "Automation"],
            icon: <Zap />,
            color: "amber",
            link: "https://news.microsoft.com/de-ch/2024/11/19/schweizer-innovation-im-fokus-ki-transformation-in-aktion/"
        },
        {
            id: 8,
            title: "CleanTech Swiss AG: Leading in Innovation Rankings",
            company: "CleanTech Swiss AG",
            content: "CleanTech Swiss AG has been recognized as one of the most innovative companies in Switzerland, focusing on sustainable technologies that drive environmental protection and energy efficiency.",
            type: "sustainability",
            tags: ["Sustainability", "Innovation"],
            icon: <Leaf />,
            color: "green",
            link: "https://www.ct-swiss.ch/cleantech-swiss-ag-top-innov/"
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