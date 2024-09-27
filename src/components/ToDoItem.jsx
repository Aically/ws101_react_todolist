import React, { useState } from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteTask, toggleEditMode, editTask }) {
  const [newValue, setNewValue] = useState(todo.text);  

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(index, newValue);  
  };

  const emojis = ['💡', '📌', '🚀', '📝', '📅', '🎯', '🔥', '🔧']; 
  const emoji = emojis[index % emojis.length];

  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      {todo.isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input 
            type="text" 
            value={newValue} 
            onChange={(e) => setNewValue(e.target.value)} 
            className="edit-input"
          />
          <button type="submit" className="save-button">Save</button>
        </form>
      ) : (
        <>
          <span onClick={() => toggleComplete(index)}>
            {emoji} {todo.text}
          </span>
          <div>
            <button onClick={() => toggleEditMode(index)} className="edit-button">Edit</button>
            <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
