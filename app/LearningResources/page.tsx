import LearningResources from "../../components/LearningResources";
import Navbar from "../../components/Navbar";

export default function LearningResourcesPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <LearningResources />
            </div>
        </div>
    );
}
