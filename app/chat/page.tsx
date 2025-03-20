'use client';

import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar'
import { useChat } from '@/context/ChatContext';

const ChatPage = () => {
    const [message, setMessage] = useState('');
    const { messages, isLoading, sendMessage, clearChat } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        await sendMessage(message);
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg p-6 h-[calc(100vh-200px)] flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Chat with Olma</h1>
                        <button
                            onClick={clearChat}
                            className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                        >
                            Clear Chat
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto mb-6 p-4 bg-gray-50 rounded-lg">
                        {messages.map((msg: any, index : number) => (
                            <div
                                key={index}
                                className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                            >
                                <div
                                    className={`inline-block max-w-[80%] p-3 rounded-lg ${
                                        msg.sender === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-none'
                                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="text-left mb-4">
                                <div className="inline-block max-w-[80%] p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-1 animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow px-4 py-2 border border-gray-300 rounded text-black"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ChatPage;
