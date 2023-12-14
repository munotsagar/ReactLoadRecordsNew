import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const perPage = 5;
  const start = 0;
  const [todos, setTodos] = useState([]);
  const [end, setEnd] = useState(perPage);
  const loadMoreRecords = () => {
    const endRec = end + perPage;
    setEnd(endRec);
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={loadMoreRecords}>Load More</button>
      </div>
      <div>
        {todos &&
          todos.slice(start, end).map((todo) => (
            <div>
              {todo.id} {todo.title}
            </div>
          ))}
      </div>
    </div>
  );
}
