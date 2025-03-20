"use client";

import React, { useState } from 'react';
import { generateIdeaValidatorResponse } from '../services/geminiService'

export default function IdeaValidator() {
    // State to manage the input prompt and AI response
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle prompt input change
    const handleInputChange = (e) => {
        setPrompt(e.target.value);
    };

    // Handle the submit process by calling the service function
    const handleSubmit = async () => {
        if (!prompt) {
            return;
        }

        setLoading(true);
        setResponse('');  // Clear previous response

        try {
            // Call the generateIdeaValidatorResponse function and pass the prompt
            const aiResponse = await generateIdeaValidatorResponse(prompt);
            // Format response to convert \n to <br />
            const formattedResponse = aiResponse.replace(/\n/g, '<br />');
            setResponse(formattedResponse);  // Set the formatted AI response to be displayed
        } catch (error) {
            console.error("Error generating response:", error);
            setResponse("There was an error processing your request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 p-6">
            {/* Main Content Area with left margin */}
            <div className="w-full max-w-4xl ml-24">
                {/* Title and Explanation */}
                <h1 className="text-3xl font-bold mb-4">Idea Validator</h1>
                <h2 className="text-xl text-gray-700 mb-8">Submit your idea or concept, and get validation or feedback from our AI-powered system.</h2>

                {/* Prompting Field */}
                <div className="mb-6">
                    <label htmlFor="prompt" className="block text-xl font-semibold">Enter your idea:</label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                        placeholder="Type your idea here..."
                    />
                </div>

                {/* Submit Button */}
                <div className="text-left">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
                        disabled={loading}
                    >
                        {loading ? 'Processing...' : 'Submit'}
                    </button>
                </div>

                {/* Display AI Response */}
                {response && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
                        <h3 className="text-lg font-semibold mb-2">AI Response:</h3>
                        {/* Render the formatted response with HTML tags */}
                        <p dangerouslySetInnerHTML={{ __html: response }} />
                    </div>
                )}
            </div>
        </div>
    );
}
