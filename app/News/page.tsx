import Navbar from "../../../components/Navbar";
import News from "../../../components/News";

export default function NewsPage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6">
                <News />
            </div>
        </div>
    );
}
