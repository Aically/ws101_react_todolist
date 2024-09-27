import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTask, toggleEditMode, editTask }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          toggleEditMode={toggleEditMode}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
