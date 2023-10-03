import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('중간');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() === '') {
      alert('제목을 입력하세요.');
      return;
    }

    const newTodo = {
      title: input,
      priority: priority,
      content: '',
      deadline: '',
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>할 일 목록</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={handleInputChange}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="높음">높음</option>
          <option value="중간">중간</option>
          <option value="낮음">낮음</option>
        </select>
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>
            <p>중요도: {todo.priority}</p>
            <button onClick={() => handleRemoveTodo(index)}>제거</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
