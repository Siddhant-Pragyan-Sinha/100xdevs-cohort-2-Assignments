import React, { useEffect, useState } from "react";
import axios from "axios";

function useTodo(n) {
  const [todo, setTodo] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getdata() {
    axios
      .get("https://dummyjson.com/todos/random")
      .then((res) => {
        setTodo(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch todo");
        setLoading(false);
      });
  }

  useEffect(() => {
    const interval_ID = setInterval(() => {
      getdata();
    }, n * 1000);

    getdata();

    return () => clearInterval(interval_ID); 
  }, [n]);

  return { todo, loading, error };
}

function App() {
  const { todo, loading, error } = useTodo(5); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {todo ? <Track_Todos todo={todo} /> : <div>No Todo found</div>} 
    </div>
  );
}

function Track_Todos({ todo }) {
  const { id, todo: todoText, completed, userId } = todo;
  return (
    <div>
      <p>Todo ID: {id}</p>
      <p>Description: {todoText}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default App;
