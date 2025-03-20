'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateChatResponse } from '@/services/geminiService';

const persona = localStorage.getItem("userPersona") || "default";
const userName = localStorage.getItem("userName") || "Guest"; // Default name if not found
const userCommunication = localStorage.getItem("userCommunication") || "default";

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

type ChatContextType = {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (message: string) => Promise<void>;
    clearChat: () => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: `Hello! I'm Olma, your Innovation Coach. How can I help you today?` }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [persona, setPersona] = useState("default");
    const [name, setName] = useState("Guest");
    const [communication, setCommunication] = useState("default");

    useEffect(() => {
        const storedPersona = localStorage.getItem("userPersona") || "default";
        const storedUserName = localStorage.getItem("userName") || "Guest";
        const storedUserCommunication = localStorage.getItem("userCommunication") || "default";

        setPersona(storedPersona);
        setName(storedUserName);
        setCommunication(storedUserCommunication);

        console.log("User Communication:", storedUserCommunication); // Debugging
    }, [communication]);

    // Send message to Gemini API
    const sendMessage = async (message: string) => {
        if (!message.trim()) return;

        // Add user message to chat
        setMessages(prev => [...prev, { sender: 'user', text: message }]);
        setIsLoading(true);

        try {
            // Create a system prompt that includes user context
            const systemPrompt = `You are Olma, an Innovation Coach AI assistant. You're helping a user who:
                            - is a manager of a SME
                            - lives in the Kanton St. Gallen
                            - he is ${persona} about innovation
                            - his main form of communication is ${userCommunication}

                            Your goal is to provide practical, actionable innovation advice tailored to their specific context.
                            Be encouraging, specific, and focus on helping them implement innovative ideas in their work.

                            Never use '*' in your responses.
                            Answer short and precise unless asked differently by the user.
                            
                            If the person is clueless about innovation, provide them with useful information about innovation in St. Gallen.
                            For example you can give them information about the University of St. Gallen especially the Swiss Institute for Small and
                            Medium-Sized Enterprises (KMU-HSG). Also directly provide                        

                            User's question: ${message}`;



            // For Gemini API, we need to ensure the first message is from a user
            // We'll only include the current user message for simplicity
            const chatHistory = [
                { role: 'user' as const, content: systemPrompt }
            ];

            // Get response from Gemini
            const response = await generateChatResponse(chatHistory, '');

            // Add bot response to chat
            setMessages(prev => [...prev, { sender: 'bot', text: response }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [
                ...prev,
                {
                    sender: 'bot',
                    text: 'Sorry, I encountered an error. Please check your API key in the environment variables or try again later.'
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    // Clear chat history
    const clearChat = () => {
        setMessages([
            { sender: 'bot', text: 'Hello! I\'m Olma, your Innovation Coach. How can I help you today?' }
        ]);
    };

    return (
        <ChatContext.Provider
            value={{
                messages,
                isLoading,
                sendMessage,
                clearChat
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === null) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};
