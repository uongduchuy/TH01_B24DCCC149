import React, { useState } from 'react';
import './App.css';
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Nhập công việc"
        />
        <button onClick={addTodo}>Thêm</button>
      </div>
      <ul>
        {todos.map((todoItem, index) => (
          <li key={index}>
            {todoItem}
            <button onClick={() => deleteTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

