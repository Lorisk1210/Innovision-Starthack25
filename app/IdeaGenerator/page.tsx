import IdeaGenerator from "../../components/IdeaGenerator";
import Navbar from "../../components/Navbar";

export default function IdeaGeneratorPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <IdeaGenerator />
            </div>
        </div>
    );
}
