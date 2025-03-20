"use client";

import React, { useEffect, useState } from "react";
import {
    BookOpen,
    Video,
    FileText,
    Globe,
    Search,
    Filter,
    Tag,
    ArrowUpRight,
    DollarSign,
    Calendar, Newspaper, UserCheck,
} from "lucide-react";


import {
    resources_clueless,
    resources_motivated,
    resources_hesitant,
    categories_clueless,
    categories_motivated,
    categories_hesitant,
} from "@/public/learning-resource-data";

type Resource = {
    id: number;
    name: string;
    institution: string;
    description: string;
    tags: string[];
    type: string;
    imageUrl: string;
    number: string;
    link: string;
    level: string;
};

type Category = {
    id: string;
    name: string;
    count: number;
};

const LearningResources = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [persona, setPersona] = useState<string>("default");
    const [resources, setResources] = useState<Resource[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const userPersona = localStorage.getItem("userPersona") || "default";
        setPersona(userPersona);

        // Set the correct resources and categories based on persona
        switch (userPersona) {
            case "clueless":
                setResources(resources_clueless);
                setCategories(categories_clueless);
                break;
            case "motivated":
                setResources(resources_motivated);
                setCategories(categories_motivated);
                break;
            case "hesitant":
                setResources(resources_hesitant);
                setCategories(categories_hesitant);
                break;
            default:
                setResources([]);
                setCategories([]);
        }
    }, []);

    const filteredResources = resources.filter((resource) => {
        const matchesFilter = activeFilter === "all" || resource.type === activeFilter;
        const matchesSearch =
            resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesFilter && matchesSearch;
    });

    const getIconForType = (type: string) => {
        switch (type) {
            case "experts":
                return <UserCheck className="h-6 w-6" />; // Experten → Experte mit Häkchen 👤✔️
            case "events":
                return <Calendar className="h-6 w-6" />; // Events → Kalender 📅
            case "news":
                return <Newspaper className="h-6 w-6" />; // News → Zeitung 📰
            case "research":
                return <Search className="h-6 w-6" />;
            case "funding":
                return <DollarSign className="h-6 w-6" />;
            case "all":
                return <Globe className="h-6 w-6" />;
            default:
                return <FileText className="h-6 w-6" />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 mb-4 pb-2">
                Learning Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Expand your innovation knowledge with our curated collection of high-quality resources.
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
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex items-center transition-colors ${
                                activeFilter === category.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {category.name}
                            <span
                                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                    activeFilter === category.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                                }`}
                            >
                {category.count}
              </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Resource Grid */}
            {filteredResources.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredResources.map((resource) => (
                        <div key={resource.id}
                             className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-100">
                            <div className="relative h-48 bg-gray-200">
                                <img src={resource.imageUrl} alt={resource.name}
                                     className="w-full h-full object-cover"/>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{resource.name}</h3>
                                <p className="text-gray-600 mb-3">{resource.institution}</p>
                                <p className="text-gray-700 mb-4">{resource.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {resource.tags.map((tag, index) => (
                                        <div key={index}
                                             className="flex items-center text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                                            {tag}
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-700 text-sm">
                                    <strong>Contact:</strong> {resource.number}
                                </p>

                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl mb-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4"/>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No resources found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
            )}
        </div>
    );
};

export default LearningResources;
