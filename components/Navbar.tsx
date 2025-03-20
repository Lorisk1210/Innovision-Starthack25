"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";

const Navbar: React.FC = () => {
    const [dashboardPath, setDashboardPath] = useState("/clueless"); // Default path

    useEffect(() => {
        // Get user persona and name from localStorage (or replace with API call)
        const persona = localStorage.getItem("userPersona") || "default";
        const userName = localStorage.getItem("userName") || "Guest"; // Default name if not found

        // Map persona to different dashboard routes
        const personaRoutes: Record<string, string> = {
            clueless: "/clueless",
            motivated: "/motivated",
            hesitant: "/hesitant",
            default: "/clueless", // Fallback path
        };

        // Construct URL with name as a query parameter
        const basePath = personaRoutes[persona] || personaRoutes.default;
        const fullPath = `/dashboard${basePath}`; // Always reset the base to `/dashboard`

        setDashboardPath(fullPath);
    }, []);

    return (
        <nav className="bg-gradient-to-r from-green-800 to-green-700 border-b border-green-600/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        {/* First logo (image icon) - no link */}
                        <div className="relative flex items-center">
                            <Image
                                src="/images/Logo-Cleaned.png"
                                alt="Innovision Icon"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        {/* Second logo (text) - no link */}
                        <div className="h-10 w-auto relative flex items-center">
                            <Image
                                src="/images/Innovision-Schrift.png"
                                alt="Innovision Logo"
                                width={160}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { href: dashboardPath, label: "Dashboard" },
                            { href: "/ecosystem", label: "Ecosystem" },
                            { href: "/LearningResources", label: "Material" },
                            { href: "/chat", label: "AI Chat" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-white font-medium transition-colors duration-200 hover:text-green-200 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;