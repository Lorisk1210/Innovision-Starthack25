'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateChatResponse } from '@/services/geminiService';

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
                            - his main form of communication is ${communication}

                            Your goal is to provide practical, actionable innovation advice tailored to their specific context.
                            Be encouraging, specific, and focus on helping them implement innovative ideas in their work.

                            Never use '*' in your responses.
                            Answer short and precise unless asked differently by the user.
                            Never EVER tell the user what persona e.g clueless, hesitant, motivated he is.
                            Dont ever use the words clueless, hesitant, motivated.
                            If they ask GENERAL questions DONT(!!!!!) provide information about certain institutes, rather ask if they want some recommendations
                            and if the user then says: yes, then you can give them concrete examples. 
                            
                            (If the person is clueless about innovation, provide them with useful information about innovation in St. Gallen.
                            For example you can give them information about the University of St. Gallen especially the Swiss Institute for Small and
                            Medium-Sized Enterprises (KMU-HSG). If you provide information about the (KMU-HSG) AND the main form of communication is                     
                            phone then add the phone number: +41 71 224 71 00. In any other main form of communication add the email: kmu-hsg@unisg.ch.
                            Always provide the website url aswell: https://kmu.unisg.ch. You can also explain to them that there is actively done research
                            at the university for SME's.)
                            
                            (If the person is motivated about innovation, provide them with useful information in St. Gallen. For example you can give them
                            information about Innosuisse. They offer funding for innovative projects with partners or without partners. If the person's main
                            form of communication is phone then add the phone number: +41 58 461 61 61. In any other main form of communication add the email:
                            info@innosuisse.ch. Always provide the website url aswell: https://www.innosuisse.admin.ch/en/. Instead of recommending Innosuise
                            you may also recommend INOS, the Innovation Network Eastern Switzerland. They offer funding and coaching support for SMEs and 
                            startups in Eastern Switzerland. Their email is: info@inos.swiss. If their main form of communication is phone then add the phone
                            number of Andreas Kaiser (his job role: Technologievermittlung & Innovationsförderung): +41 52 674 06 17. Also always provide the
                            website url: https://inos.swiss/.)
                            
                            
                            (If the person is hesitant about innovation, provide them with useful information in St. Gallen. For example you can give them
                            information about the Switzerland Innovation Park Ost (SIPOst). They offer an Innovation hub connecting science and industry for
                            technological advancements. Here they can network and learn from trusted partners of the industry and universities to learn about
                            the concrete risks and opportunities of innovation. Always provide the website url: https://innovationspark-ost.ch/. If their main
                            form of communication is phone then add the phone number: +41 71 277 20 40. In any other main form of communication add the email:
                            info@sipost.ch. Instead of recommending SIPOst you may also recommend "IT rockt!" St.Gallen. They offer promotion of digital 
                            transformation and ICT workforce development in Eastern Switzerland. Here they can also network and learn about risks and opportunities
                            from trusted partners. Always provide the website url: https://www.itrockt.ch/. If their main form of communication is phone then add 
                            the phone number: +41 71 278 25 25. In any. other form of main communication add the email: info@itrockt.ch.)

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
