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
                            Never tell the user what persona e.g clueless, hesitant, motivated he is.
                            
                            Depending on the input of the user you can tell him how to reach out to different insitutions,
                            I give you possible insitutions in the following in the format:
                            Category Institution Name Description Focus Areas Contact Website
                            Academia\tUniversity of St.Gallen (HSG)\tSchool of Management (SoM-HSG)\tResearch and teaching in business administration, strategy, and innovation.\tBusiness Strategy, Innovation, Leadership\tsom@unisg.ch\thttps://som.unisg.ch
                            Academia\tUniversity of St.Gallen (HSG)\tSchool of Finance (SoF-HSG)\tResearch on financial markets, banking, corporate finance, and risk analysis.\tBanking, Corporate Finance, Risk Management\tsof@unisg.ch\thttps://sof.unisg.ch
                            Academia\tUniversity of St.Gallen (HSG)\tSchool of Economics and Political Science (SEPS-HSG)\tResearch on economic policy, macroeconomics, and global markets.\tEconomic Policy, Macroeconomics, International Economics\tseps@unisg.ch\thttps://seps.unisg.ch
                               Academia\tEastern Switzerland University of Applied Sciences (OST)\tDepartment of Transport Systems\tResearch on mobility, traffic engineering, and smart cities.\tMobility, Traffic Engineering, Smart Cities\ttransport@ost.ch\thttps://www.ost.ch
Academia\tEastern Switzerland University of Applied Sciences (OST)\tDepartment of Micro- and Nanotechnology\tResearch in semiconductor technology, sensor technology, and photonics.\tSemiconductor Technology, Sensor Technology, Photonics\tmicro@ost.ch\thttps://www.ost.ch
Funding\tInnovation Network Eastern Switzerland\tINOS\tFunding and coaching support for SMEs and startups in Eastern Switzerland.\tProduct Innovation, Process Optimization, Business Models\tinfo@inos.swiss\thttps://inos.swiss
Network\tSwitzerland Innovation Park Ost (SIPOst)\tSwitzerland Innovation Park Ost\tInnovation hub connecting science and industry for technological advancements.\tTechnology Development, Business Models, Startup Support\tinfo@sipost.ch\thttps://www.switzerland-innovation.com/ost
Association\tChamber of Commerce St.Gallen-Appenzell (IHK)\tIHK - Chamber of Commerce\tSupport and representation for businesses in Eastern Switzerland.\tExport Consulting, Further Education, Networking Events\tinfo@ihk.ch\thttps://www.ihk.ch
Association\tCantonal Trade Association St.Gallen (KGV)\tKGV - Trade Association\tRepresentation of SME and trade interests in Eastern Switzerland.\tLegal Advice, Further Education, Interest Representation\tinfo@kgv.ch\thttps://www.kgv.ch
Government\tCanton of St. Gallen\tEconomic Promotion Canton of St. Gallen\tStrengthening the regional economy through networking and information sharing.\tBusiness Networking, Economic Information, Policy Representation\tinfo@wirtschaftsg.ch\thttps://www.wirtschaftsg.ch
Research\tRhySearch\tRhySearch Innovation Center\tApplied research in optical coatings, high-precision manufacturing, and digital innovation.\tOptical Coatings, High-Precision Manufacturing, Digital Innovation\tinfo@rhysearch.ch\thttps://www.rhysearch.ch
Funding\tInnosuisse\tInternational Innovation Projects\tSupport for Swiss companies and research institutions to collaborate with international partners on innovation projects, combining Swiss expertise with global insights.\tGlobal Collaboration, Cross-border Innovation, International Partnerships\tinternational@innosuisse.ch\thttps://www.innosuisse.admin.ch/en/funding-for-international-projects
Research\tEmpa\tMaterials meet Life\tDevelops novel materials and systems to protect and support the human body under various conditions, focusing on health innovations.\tWearable Sensors, Precision Medicine, Implants, Biomedical Imaging, Nanostructured Materials\tinfo@empa.ch\thttps://www.empa.ch/web/s604
Research\tEmpa\tAdvanced Manufacturing\tFocuses on the development and upscaling of advanced manufacturing technologies, including additive manufacturing and coating processes, to facilitate industrial applications.\tAdditive Manufacturing, Coating Technologies, Process Upscaling\tinfo@empa.ch\thttps://www.empa.ch/web/s209

In a usual prompt the user is looking for the contact of institutions, so phone or email then provide it to them. Use the prefered communication channel.

Never tell the customer how he feels about innovation! And never use Markdown and never use '*'! Again very important, never tell the user how he feels about innovation.
In one answer ONLY include a maximum amount of one institution!
                            

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
