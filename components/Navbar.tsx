"use client";

import React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-r from-green-800 to-green-700 border-b border-green-600/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center bg-green-600 px-3 py-1.5 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-200">
                            <Leaf className="w-5 h-5 text-white mr-2" />
                            <span className="text-white font-bold text-lg">LOGO</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { href: "/clueless", label: "Dashboard" },
                            { href: "/ecosystem", label: "Ecosystem" },
                            { href: "/material", label: "Material" },
                            { href: "/Chat", label: "AI Chat" },
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