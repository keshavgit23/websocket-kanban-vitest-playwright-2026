const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

let tasks = [];

io.on("connection", (socket) => {
  console.log("A user connected");
  // Send tasks tp new client
  socket.emit("sync:tasks", tasks);

 // create
  socket.on("task:create", (task)=>{
    tasks.push(task);
    io.emit("task:create", task);
  })

  // update
  socket.on("task:update", (updatedTask)=>{
    tasks = tasks.map(task => task.id === updatedTask.id?
      { ...task, ...updatedTask} : task
    );
    io.emit("task:update", updatedTask);
  });

  // move 
  socket.on("task:move", ({ id, newColumn}) => {
    tasks = tasks.map(task => task.id === id? {
      ...task, column: newColumn}: task
    );
    io.emit("task:move", {id, newColumn});
  })

  // delete
  socket.on("task:delete",(id)=>{
    tasks = tasks.filter(task => task.id!==id);
    io.emit("task:delete", id);
  })

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
