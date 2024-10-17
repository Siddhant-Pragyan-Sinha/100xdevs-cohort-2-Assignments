import React from "react";

// Define the Todo interface
interface Todo_Interface {
  title: string;
  description: string;
  isDone: boolean;
}

// Create a functional component for rendering a Todo
function Todo({ todo }: { todo: Todo_Interface }) {
  return (
    <div>
      <div>Title: {todo.title}</div>
      <div>Description: {todo.description}</div>
      <div>Completed: {todo.isDone ? "Yes" : "No"}</div>
    </div>
  );
}

// Main App Component
function App() {
  const todo: Todo_Interface = {
    title: "title1",
    description: "description1",
    isDone: false,
  };

  return (
    <div>
      <Todo todo={todo} />
    </div>
  );
}

export default App;
