import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('중간');
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState('');
  const [sort, setSort] = useState('unsorted');
  const [filter, setFilter] = useState('no filter');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const handleAddTodo = () => {
    if (input.trim() === '') {
      alert('Todo를 입력하세요.');
      return;
    }

    if(deadline.trim()===''){
      alert('마감기한을 입력하세요.');
      return;
    }

    const newTodo = {
      title: input,
      priority: priority,
      content: content,
      deadline: deadline,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const sortedAndFilteredTodos = todos.slice().filter((todo) => {
    if (filter === 'no filter' || filter === todo.priority) {
      return true;
    }
    return false;
  }).sort((a, b) => {
    if (sort === 'sorted') {
      // 'sorted' 옵션일 때 중요도(priority)로 정렬
      return a.priority.localeCompare(b.priority);
    }
    // 'unsorted' 옵션일 때 순서를 그대로 유지
    return 0;
  });


  return (
    <div className="App">
      <h1>ToDoList</h1>
      <div className = "sortlist">
        <select value={sort} onChange={handleSortChange}>
          <option value = "sorted">sorted</option>
          <option value = "unsorted">unsorted</option>
        </select>
      </div>
      <div className="filterlist">
        <select value={filter} onChange={handleFilterChange}>
          <option value="no filter">전체</option>
          <option value="높음">높음</option>
          <option value="중간">중간</option>
          <option value="낮음">낮음</option>
        </select>
      </div>
      
      <div className="add-todo">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="세부사항을 입력하세요"
          value={content}
          onChange={handleContentChange}
        />
        <input
          type="text"
          placeholder="마감기한을 입력하세요"
          value={deadline}
          onChange={handleDeadlineChange}
        />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="높음">높음</option>
          <option value="중간">중간</option>
          <option value="낮음">낮음</option>
        </select>
        <button onClick={handleAddTodo}>추가</button>

      </div>
      <ul className="todo-list">
        {sortedAndFilteredTodos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>
            <p>중요도: {todo.priority}</p>
            <p>{content}</p>
            <button onClick={() => handleRemoveTodo(index)}>제거</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
