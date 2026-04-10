import { useState, useEffect } from "react";
import { socket } from "../services/socket";
import { useTasks } from "../hooks/useTasks";

export default function KanbanBoard() {
    const { tasks } = useTasks();
    const [title, setTitle] = useState("");

    const createTask = () => {
        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title,
            column: "To Do"
        };

        socket.emit("task:create", newTask);
        setTitle("");
    };

    const columns = ["To Do", "In Progress", "Done"];
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Kanban Board</h1>

            <div className="flex gap-3 mb-8">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task..."
                    className="px-4 py-2 rounded-xl w-72 border outline-none focus:text-black focus:ring-2 focus:ring-teal-500" ></input>
                <button
                    onClick={createTask}
                    className="bg-teal-600 rounded-lg px-6 py-0 text-white hover:bg-teal-700 transition">Add Task</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {columns.map((col) => (
                    <div
                        key={col}
                        className="bg-teal-700 flex justify-center items-center flex-col rounded-2xl shadow-md px-4">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-lg text-white">{col}</h2>
                            <span className="text-sm text-gray-400">
                                {
                                    tasks.filter((t) => t.column === col).length
                                }
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
                            {
                                tasks.filter((task) => task.column === col)
                                    .map((task) => (
                                        <div
                                            key={task.id}
                                            className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition">
                                            <p className="font-medium text-gray-800">
                                                {task.title}
                                            </p>
                                        </div>
                                    ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

