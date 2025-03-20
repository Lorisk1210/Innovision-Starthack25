
import Navbar from "../../../components/Navbar";
import Swot from "../../../components/Swot";

export default function SwotPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto p-6">
                <Swot />
            </div>
        </div>
    );
}