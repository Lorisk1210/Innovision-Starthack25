"use client";
import React, { useState } from "react";


const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim() === "") return;

        setMessages([...messages, { sender: "You", text: input }]);
        setInput("");
    };

    return (
        <div className="container mx-auto p-8 flex flex-col h-screen">
            <h1 className="text-3xl font-bold mb-6">AI Chat</h1>
            <div className="flex-grow bg-gray-100 p-6 rounded-lg shadow-md overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
                        <p className="font-semibold">{msg.sender}</p>
                        <div className="inline-block bg-white p-3 rounded-lg shadow-md max-w-xs">{msg.text}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex">
                <input
                    type="text"
                    className="flex-grow p-3 border rounded-lg shadow-md"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                    className="ml-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;
