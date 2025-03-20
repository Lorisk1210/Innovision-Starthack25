"use client";

import { useState } from "react";
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "@hello-pangea/dnd";

// Define types
interface Task {
    id: string;
    content: string;
}

interface Column {
    title: string;
    items: Task[];
}

interface Columns {
    [key: string]: Column;
}

// Initial Kanban board data
const initialColumns: Columns = {
    ready: {
        title: "Ready",
        items: [],
    },
    inWork: {
        title: "In Work",
        items: [],
    },
    testing: {
        title: "Testing",
        items: [],
    },
    done: {
        title: "Done",
        items: [],
    },
};

export default function KanbanBoard() {
    const [columns, setColumns] = useState<Columns>(initialColumns);
    const [taskContent, setTaskContent] = useState("");

    const onDragEnd = (result: DropResult) => {
        console.log("Drag event:", result); // Debugging

        if (!result.destination) return;

        const { source, destination } = result;
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        const sourceItems = [...sourceColumn.items];
        const [movedItem] = sourceItems.splice(source.index, 1);

        const destItems = [...destColumn.items];
        destItems.splice(destination.index, 0, movedItem);

        setColumns({
            ...columns,
            [source.droppableId]: { ...sourceColumn, items: sourceItems },
            [destination.droppableId]: { ...destColumn, items: destItems },
        });
    };

    const handleAddTask = () => {
        if (taskContent.trim() === "") return; // Do nothing if the input is empty

        const newTask: Task = {
            id: new Date().toISOString(), // Unique task ID
            content: taskContent,
        };

        // Add the task to the 'ready' column by default
        const updatedColumns = { ...columns };
        updatedColumns.ready.items.push(newTask);

        setColumns(updatedColumns);
        setTaskContent(""); // Clear the input field
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            {/* Task Input Section */}
            <div className="mb-4">
                <input
                    type="text"
                    value={taskContent}
                    onChange={(e) => setTaskContent(e.target.value)}
                    placeholder="Enter task content"
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddTask}
                    className="ml-2 p-2 bg-green-500 text-white rounded"
                >
                    Add Task
                </button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex gap-4">
                    {Object.entries(columns).map(([columnId, column]) => (
                        <Droppable key={columnId} droppableId={columnId}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className={`p-4 w-1/4 bg-gray-200 rounded min-h-[200px] ${
                                        snapshot.isDraggingOver ? "bg-gray-300" : ""
                                    }`}
                                >
                                    <h2 className="text-lg font-bold mb-2">{column.title}</h2>
                                    {column.items.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`p-3 bg-white shadow rounded mb-2 ${
                                                        snapshot.isDragging
                                                            ? "opacity-50"
                                                            : "opacity-100"
                                                    }`}
                                                >
                                                    {item.content}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>
        </div>
    );
}
