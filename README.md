---

# 🚀 Real-Time Kanban Board (WebSocket Based)

A full-stack Kanban board application that enables users to manage tasks efficiently with real-time updates.  
Built to demonstrate practical knowledge of *WebSockets, frontend-backend communication, and automated testing*.

---

## 📌 Features

✅ Create tasks  
✅ Delete tasks  
✅ Move tasks between columns using action buttons  
✅ Real-time synchronization with WebSockets  
---

## 🧪 Testing

This project includes automated tests to validate core Kanban board functionality and WebSocket interactions.

### Testing Tools
- **Vitest** – Fast unit testing framework  
- **React Testing Library** – Component testing from a user perspective  
- **Socket.IO Mocking** – Simulated WebSocket behavior for predictable tests  

---

### ✅ Covered Test Cases

**Unit Tests**
- Renders the Kanban board UI correctly  
- Allows users to create a task  
- Emits `task:create` event with correct payload  
- Displays tasks received from the WebSocket  
- Deletes tasks and emits `task:delete` event  

**Integration-Level Validation**
- Verifies that the client responds to WebSocket events  
- Ensures UI updates when tasks are created or deleted  

---

### ▶️ Run Tests

```bash
npm run test
```
---

## 📂 Project Structure

```
websocket-kanban-vitest-playwright
│── backend/                     # Node.js WebSocket server
│   ├── server.js                 # Express + Socket.IO WebSocket setup
│   ├── package.json              # Backend dependencies
│
│── frontend/                     # React app
│   ├── src/
│   │   ├── components/           # UI components
│   │   │   ├── KanbanBoard.jsx
│   │   ├── tests/                # All test cases
│   │   │   ├── unit/             # Unit tests (Vitest)
│   │   │   ├── integration/      # Integration tests (Vitest)
│   │   │   ├── e2e/              # End-to-end tests (Playwright)
│   ├── package.json
│
└── README.md                     # Project guide
```
---

---

## ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/keshavgit23/websocket-kanban-vitest-playwright-2026.git
cd websocket-kanban-vitest-playwright-2026
```

### Install dependencies

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 What I Learned

- Implementing real-time communication using WebSockets
- Managing state across client and server
- Writing reliable automated tests
- Structuring a full-stack project
- Debugging real-world async issues

---

---

👉 **"This project was completed as part of a technical assignment."**

### Feedback and contributions are welcome. If you found this project valuable, consider starring the repository.

---
