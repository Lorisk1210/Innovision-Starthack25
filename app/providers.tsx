'use client';

import React from 'react';
import { ChatProvider } from '@/context/ChatContext';
import {TourProvider} from "@reactour/tour";
import { usePathname } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const steps = {
        "/dashboard/clueless" : [
        { selector: "#learning-resources", content: "Explore our learning resources to enhance your knowledge." },
        { selector: "#success-stories", content: "Read inspiring innovation success stories." },
        { selector: "#idea-generator", content: "Generate new ideas with our AI-powered tool." },
        { selector: "#roadmap-section", content: "Follow a structured roadmap for your innovation journey." }
    ],
        "/dashboard/motivated" : [
            { selector: "#idea-validator", content: "Check your innovative idea with our AI." },
            { selector: "#business", content: "Explore our tools to analyze your business." },
            { selector: "#ecosystem", content: "Explore what St. Gallen has to offer." },
            { selector: "#roadmap-section", content: "Follow a structured roadmap for your innovation journey." }
        ],
        "/dashboard/hesitant" : [
            { selector: "#success-stories", content: "Read inspiring innovation success stories." },
            { selector: "#business", content: "Explore our tools to analyze your business." },
            { selector: "#ecosystem", content: "Explore what St. Gallen has to offer." },
            { selector: "#roadmap-section", content: "Follow a structured roadmap for your innovation journey." }
        ]
    }

    return (
        <ChatProvider>
            <TourProvider steps={steps[pathname]}>
                {children}
            </TourProvider>
        </ChatProvider>
    );

}

