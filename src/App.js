import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task, isCompleted: false, isEditing: false }]); 
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTask = (index, newValue) => {
    const newTodos = [...todos];
    newTodos[index].text = newValue;
    newTodos[index].isEditing = false; 
    setTodos(newTodos);
  };

  const toggleEditMode = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = !newTodos[index].isEditing;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>My ToDo List</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTask={deleteTask} 
        toggleEditMode={toggleEditMode} 
        editTask={editTask} 
      />
    </div>
  );
}

export default App;
