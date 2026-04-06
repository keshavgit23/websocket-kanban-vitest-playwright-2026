import { useEffect, useState } from "react";
import { socket } from "../services/socket";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

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

    return {tasks};
}