import { useState, useEffect } from "react";
import { socket } from "../services/socket";
import { useTasks } from "../hooks/useTasks";

export default function KanbanBoard() {
    const {tasks} = useTasks();
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
        <div style={{ padding: "20px" }}>
            <h1>Kanban Board</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task..."
                    style={{
                        padding: "8px",
                        width: "250px",
                        marginRight: "10px"
                }}
                />
                <button
                    onClick={createTask}
                    style={{
                        padding: "8px 12px",
                        cursor: "pointer"
                    }}
                >
                    Add Task
                </button>
            </div>

            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                {columns.map((col) => (
                    <div
                        key={col}
                        style={{
                            flex: 1,
                            border: "1px solid gray",
                            padding: "5px",
                            borderRadius: "8px",
                            background: "#fafafa",
                            height: "400px",
                            textAlign: "center",
                            overflowY: "auto"
                        }}
                    >
                        <h2>{col}</h2>
                        {tasks.filter((task) => task.column === col)
                            .map((task) => (
                                <div
                                    key={task.id}
                                    style={{
                                        padding: "5px",
                                        margin: "5px 0",
                                        background: "#f0f0f0",
                                        borderRadius: "3px",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <strong>{task.title}</strong>
                                    <div style={{ marginTop: "8px" }}>
                                        {/* Move Button */}
                                        {col !== "Done" && (
                                            <button
                                                onClick={() =>
                                                    socket.emit("task:move", {
                                                        id: task.id,
                                                        newColumn:
                                                            col === "To Do"
                                                                ? "In Progress"
                                                                : "Done"
                                                    })
                                                }
                                                style={{ marginRight: "5px" }}
                                            >
                                                Move →
                                            </button>
                                        )}
                                        <button
                                            onClick={() =>
                                                socket.emit("task:delete", task.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                         ))}
                         </div>
                    ))}
            </div>
        </div>
    );
}

