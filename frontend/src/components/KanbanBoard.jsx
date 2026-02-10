import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function KanbanBoard() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        socket.on("sync:tasks", (tasks) => setTasks(tasks));

        socket.on("task:create", (task) => setTasks((prev) => [...prev, task]));

        socket.on("task:update", (updatedTask) => setTasks((prev) => prev.map((t) => t.id === updatedTask.id ? updatedTask : t))
        );

        socket.on("task:move", ({ id, newColumn }) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, column: newColumn } : t)))
        );

        socket.on("task:delete", (id) => setTasks((prev) => prev.filter((t) => t.id !== id))
        );

        return () => {
            socket.off("sync:tasks");
            socket.off("task:create");
            socket.off("task:update");
            socket.off("task:move");
            socket.off("task:delete");
        };
    }, []);

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

