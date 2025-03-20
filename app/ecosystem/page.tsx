"use client";
import React from "react";
import Ecosystem from "@/components/Ecosystem";
import Navbar from '../../components/Navbar';

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />
            <Ecosystem/>
        </div>
    );
};

export default Page;