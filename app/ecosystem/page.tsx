"use client";

import React from "react";
import Navbar from '../../components/Navbar'
import Ecosystem from "@/components/Ecosystem";

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />
            <Ecosystem/>
        </div>
    );
};

export default Page;