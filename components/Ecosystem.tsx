"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

// Import dataset (Make sure dataset.json is inside the public folder)
import institutionsData from "@/public/dataset.json";

const Ecosystem: React.FC = () => {
    const [filteredInstitutions, setFilteredInstitutions] = useState(institutionsData);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTags, setSelectedTags] = useState<{ value: string; label: string }[]>([]);

    // Extract unique categories
    const categories = Array.from(new Set(institutionsData.map((inst) => inst.Category)));

    // Extract unique focus areas (splitting comma-separated values into an array)
    const allTags = Array.from(
        new Set(
            institutionsData.flatMap((inst) =>
                inst.FocusAreas ? inst.FocusAreas.split(", ").map((tag) => tag.trim()) : []
            )
        )
    ).map((tag) => ({ value: tag, label: tag }));

    useEffect(() => {
        filterInstitutions();
    }, [selectedCategory, selectedTags]);

    const filterInstitutions = () => {
        let filtered = institutionsData;

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter((inst) => inst.Category === selectedCategory);
        }

        // Filter by selected focus areas (ensure FocusAreas is split properly)
        if (selectedTags.length > 0) {
            const selectedTagValues = selectedTags.map((tag) => tag.value);
            filtered = filtered.filter((inst) => {
                const focusAreaList = inst.FocusAreas ? inst.FocusAreas.split(", ").map((tag) => tag.trim()) : [];
                return focusAreaList.some((tag) => selectedTagValues.includes(tag));
            });
        }

        setFilteredInstitutions(filtered);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-left text-black">Explore the St. Galler Ecosystem</h1>
            <h2 className="text-gray-600 mb-3 text-left">Find out what your surrounding has to offer!</h2>

            {/* Filters Section */}
            <div className="bg-white shadow-lg p-6 rounded-lg mb-6 border border-gray-300">
                <h2 className="text-lg font-semibold text-green-800 mb-4">🔍 Filter Institutions</h2>

                {/* Category Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-green-700 mb-2">Select Category</label>
                    <select
                        className="border border-gray-400 p-3 w-full rounded-lg shadow-sm focus:ring focus:ring-green-300"
                        value={selectedCategory || ""}
                        onChange={(e) => setSelectedCategory(e.target.value || null)}
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Focus Area Filter */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-green-700 mb-2">Select Focus Areas</label>
                    <Select
                        isMulti
                        options={allTags}
                        className="mt-1 shadow-sm"
                        styles={{
                            control: (base) => ({
                                ...base,
                                borderColor: "gray",
                                boxShadow: "none",
                                "&:hover": { borderColor: "darkgray" },
                            }),
                        }}
                        value={selectedTags}
                        onChange={(selected) => setSelectedTags(selected as { value: string; label: string }[])}
                    />
                </div>
            </div>

            {/* Results List */}
            <div className="mt-6">
                {filteredInstitutions.length === 0 ? (
                    <p className="text-center text-gray-500">No institutions found.</p>
                ) : (
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredInstitutions.map((inst) => (
                            <li
                                key={inst.Name}
                                className="border border-gray-400 p-5 rounded-lg shadow-md bg-white hover:shadow-lg hover:border-gray-600 transition-shadow"
                            >
                                <h2 className="text-xl font-semibold text-green-700">{inst.Name}</h2>
                                <p className="text-gray-600 mt-1">{inst.Description}</p>
                                <p className="text-sm font-medium text-green-800 mt-2">
                                    <strong>Focus Areas:</strong> {inst.FocusAreas}
                                </p>
                                <p className="text-sm text-gray-700 mt-2">
                                    <strong>📧 Contact:</strong>{" "}
                                    <a
                                        href={`mailto:${inst.Contact}`}
                                        className="text-green-600 hover:text-green-800"
                                    >
                                        {inst.Contact}
                                    </a>
                                </p>
                                <a
                                    href={inst.Website}
                                    className="text-green-600 hover:text-green-800 block mt-3 font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    🌍 Visit Website
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Ecosystem;
