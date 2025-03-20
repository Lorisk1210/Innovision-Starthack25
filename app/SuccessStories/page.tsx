import SuccessStory from "../../../components/SuccessStories";
import Navbar from "../../../components/Navbar";

export default function SuccessStoryPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <SuccessStory />
            </div>
        </div>
    );
}
