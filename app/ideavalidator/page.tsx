"use client";

import React from 'react';

import '../dashboard.css';
import Navbar from '../../components/Navbar';
import IdeaValidator from "@/components/IdeaValidator";

export default function Validator() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
            <Navbar />

            <IdeaValidator />
        </div>
    );
}
