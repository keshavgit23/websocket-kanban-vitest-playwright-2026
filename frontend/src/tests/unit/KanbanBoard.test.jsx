import { render, screen, fireEvent } from "@testing-library/react";
import KanbanBoard from "../../components/KanbanBoard.jsx";
import { vi, afterEach} from "vitest";

let socketEvents;
const mockSocket = vi.hoisted(() => {
     socketEvents = {};
  
     const mockSocket = {
      on:vi.fn((event, callback)=>{
    socketEvents[event] = callback;
     }),
     emit: vi.fn(),
     off: vi.fn(),
    };
  return { mockSocket, socketEvents};
  });

vi.mock("socket.io-client", ()=>({
  io: () => mockSocket,
}));
test("renders Kanban board title", () => {
  render(<KanbanBoard />);
  expect(screen.getByPlaceholderText("Enter task...")).toBeInTheDocument();
});

test("user can add task", () =>{
  render(<KanbanBoard/>);

  const input = screen.getByPlaceholderText("Enter task...");
  const button = screen.getByText("Add Task");

  fireEvent.change(input, {target: {value: "My First task"}});
  fireEvent.click(button);

  expect(mockSocket.emit).toHaveBeenCalledWith(
    "task:create",
    expect.objectContaining({
      title: "My First task",
      column: "To Do",
    }));
  });

    test("user can delete task", () => {
      render(<KanbanBoard/>);

      socketEvents["task:created"]({
        id: "1",
        title: "My task",
        column: "To Do",
      });

      expect(screen.getByText("My task")).toBeInTheDocument();
      fireEvent.click(screen.getByText("Delete"));

      expect(mockSocket.emit).toHaveBeencalledWith("task:delete", "1");
      socketEvents["task:deleted"]("1");
      expect(screen.queryByText("My task")).not.toBeInTheDocument();
    });


// TODO: Add more unit tests for individual components
