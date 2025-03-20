"use client";  // Marking the component as a client-side component

import React, { useState } from 'react';

interface SWOTTile {
    title: string;
    description: string;
}

const Swot: React.FC = () => {
    // Initialize state for each category
    const [strengths, setStrengths] = useState<SWOTTile[]>([]);
    const [weaknesses, setWeaknesses] = useState<SWOTTile[]>([]);
    const [opportunities, setOpportunities] = useState<SWOTTile[]>([]);
    const [threats, setThreats] = useState<SWOTTile[]>([]);

    // State to handle edit mode
    const [editTile, setEditTile] = useState<{ category: string; index: number } | null>(null);
    const [editTitle, setEditTitle] = useState<string>('');
    const [editDescription, setEditDescription] = useState<string>('');

    // Function to add a new tile to a category
    const addTile = (
        category: 'strengths' | 'weaknesses' | 'opportunities' | 'threats',
        title: string,
        description: string
    ) => {
        const newTile = { title, description };
        switch (category) {
            case 'strengths':
                setStrengths([...strengths, newTile]);
                break;
            case 'weaknesses':
                setWeaknesses([...weaknesses, newTile]);
                break;
            case 'opportunities':
                setOpportunities([...opportunities, newTile]);
                break;
            case 'threats':
                setThreats([...threats, newTile]);
                break;
        }
    };

    // Start editing a tile
    const startEditing = (category: string, index: number) => {
        let tile: SWOTTile;
        switch (category) {
            case 'strengths':
                tile = strengths[index];
                break;
            case 'weaknesses':
                tile = weaknesses[index];
                break;
            case 'opportunities':
                tile = opportunities[index];
                break;
            case 'threats':
                tile = threats[index];
                break;
            default:
                return;
        }
        setEditTile({ category, index });
        setEditTitle(tile.title);
        setEditDescription(tile.description);
    };

    // Save the edited tile
    const saveEdit = () => {
        if (editTile) {
            const { category, index } = editTile;
            const updatedTile = { title: editTitle, description: editDescription };

            switch (category) {
                case 'strengths':
                    const updatedStrengths = [...strengths];
                    updatedStrengths[index] = updatedTile;
                    setStrengths(updatedStrengths);
                    break;
                case 'weaknesses':
                    const updatedWeaknesses = [...weaknesses];
                    updatedWeaknesses[index] = updatedTile;
                    setWeaknesses(updatedWeaknesses);
                    break;
                case 'opportunities':
                    const updatedOpportunities = [...opportunities];
                    updatedOpportunities[index] = updatedTile;
                    setOpportunities(updatedOpportunities);
                    break;
                case 'threats':
                    const updatedThreats = [...threats];
                    updatedThreats[index] = updatedTile;
                    setThreats(updatedThreats);
                    break;
            }

            setEditTile(null); // Exit edit mode
        }
    };

    // Cancel editing
    const cancelEdit = () => {
        setEditTile(null);
    };

    return (
        <div className="space-y-8">

            {/* Header Section */}
            <div className="text-left">
                <h1 className="text-4xl font-extrabold mb-2">SWOT Analysis</h1>
                <h2 className="text-xl font-medium text-gray-600">Figure out what aspects your innovation idea needs to address!</h2>
            </div>

            {/* SWOT Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Strengths Section */}
                <div className="p-4 bg-green-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Strengths</h2>
                    <button
                        onClick={() =>
                            addTile('strengths', 'New Strength', 'Describe the strength here.')
                        }
                        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Add Strength
                    </button>
                    {strengths.map((tile, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow mb-4">
                            {editTile?.category === 'strengths' && editTile.index === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Title"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Description"
                                    />
                                    <div className="flex space-x-4">
                                        <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded">
                                            Save
                                        </button>
                                        <button onClick={cancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold">{tile.title}</h3>
                                    <p>{tile.description}</p>
                                    <button
                                        onClick={() => startEditing('strengths', index)}
                                        className="mt-2 text-blue-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Weaknesses Section */}
                <div className="p-4 bg-red-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Weaknesses</h2>
                    <button
                        onClick={() =>
                            addTile('weaknesses', 'New Weakness', 'Describe the weakness here.')
                        }
                        className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Add Weakness
                    </button>
                    {weaknesses.map((tile, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow mb-4">
                            {editTile?.category === 'weaknesses' && editTile.index === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Title"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Description"
                                    />
                                    <div className="flex space-x-4">
                                        <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded">
                                            Save
                                        </button>
                                        <button onClick={cancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold">{tile.title}</h3>
                                    <p>{tile.description}</p>
                                    <button
                                        onClick={() => startEditing('weaknesses', index)}
                                        className="mt-2 text-blue-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Opportunities Section */}
                <div className="p-4 bg-blue-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Opportunities</h2>
                    <button
                        onClick={() =>
                            addTile('opportunities', 'New Opportunity', 'Describe the opportunity here.')
                        }
                        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Add Opportunity
                    </button>
                    {opportunities.map((tile, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow mb-4">
                            {editTile?.category === 'opportunities' && editTile.index === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Title"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Description"
                                    />
                                    <div className="flex space-x-4">
                                        <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded">
                                            Save
                                        </button>
                                        <button onClick={cancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold">{tile.title}</h3>
                                    <p>{tile.description}</p>
                                    <button
                                        onClick={() => startEditing('opportunities', index)}
                                        className="mt-2 text-blue-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Threats Section */}
                <div className="p-4 bg-yellow-100 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Threats</h2>
                    <button
                        onClick={() =>
                            addTile('threats', 'New Threat', 'Describe the threat here.')
                        }
                        className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded"
                    >
                        Add Threat
                    </button>
                    {threats.map((tile, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow mb-4">
                            {editTile?.category === 'threats' && editTile.index === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Title"
                                    />
                                    <textarea
                                        value={editDescription}
                                        onChange={(e) => setEditDescription(e.target.value)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                                        placeholder="Edit Description"
                                    />
                                    <div className="flex space-x-4">
                                        <button onClick={saveEdit} className="px-4 py-2 bg-blue-500 text-white rounded">
                                            Save
                                        </button>
                                        <button onClick={cancelEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="font-semibold">{tile.title}</h3>
                                    <p>{tile.description}</p>
                                    <button
                                        onClick={() => startEditing('threats', index)}
                                        className="mt-2 text-blue-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Swot;
