"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 flex items-center">
            <div className="container mx-auto flex items-center">
                <div className="text-white text-lg font-semibold bg-gray-700 px-4 py-2 rounded-lg">LOGO</div>
                <div className="flex-grow flex justify-center space-x-4">
                    <Link className="text-white font-bold px-3 hover:text-blue-400" href="/">Home</Link>
                    <Link className="text-white font-bold px-3 hover:text-blue-400" href={"/News"}>News</Link>
                    <Link className="text-white font-bold px-3 hover:text-blue-400" href={"/SuccessStories"}>Success Stories</Link>
                    <Link className="text-white font-bold px-3 hover:text-blue-400" href={"/CostAnalysis"}>Cost Analysis</Link>
                    <Link className="text-white font-bold px-3 hover:text-blue-400" href={"/ChatBot"}>AI Chat</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
