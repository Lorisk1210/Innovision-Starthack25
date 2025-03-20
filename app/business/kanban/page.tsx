import Navbar from "../../../components/Navbar";
import KanbanBoard from "../../../components/kanban";

export default function KanbanPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-extrabold mb-4 ml-6">Kanban Board</h1>
                <KanbanBoard />
            </div>
        </div>
    );
}