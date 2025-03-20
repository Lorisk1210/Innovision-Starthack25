"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
    const searchParams = useSearchParams();
    const persona = searchParams.get("persona");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold text-green-800">Your Innovation Persona</h1>
            <p className="text-2xl mt-4">
                {persona ? `You are: ${persona.charAt(0).toUpperCase() + persona.slice(1)}` : "Loading..."}
            </p>
        </div>
    );
}
