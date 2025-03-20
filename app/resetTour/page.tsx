"use client";

import { useEffect } from "react";

export default function ResetTourPage() {


    useEffect(() => {
        localStorage.setItem("hasSeenTour", "0"); // Reset the tour flag
    }, []);

    return <p>Resetting tour...</p>; // Optional text while redirecting
}
