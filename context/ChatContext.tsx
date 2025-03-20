'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateChatResponse } from '@/services/geminiService';

// MIGHT USE LATER
// import { useOnboarding } from './OnboardingContext';

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
        { sender: 'bot', text: 'Hello! I\'m Olma, your Innovation Coach. How can I help you today?' }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    // MIGHT USE LATER
    // const { userData } = useOnboarding();

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

                            Your goal is to provide practical, actionable innovation advice tailored to their specific context.
                            Be encouraging, specific, and focus on helping them implement innovative ideas in their work.

                            Don't try to generate words in bold (dont use ** text **).
                            Don't try to generate words in italics (dont use * text *).


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
