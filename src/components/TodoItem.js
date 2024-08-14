import React, { useState } from "react";

const TodoItem = ({ todo, index, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(index, editText); // Panggil fungsi edit dari props
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{todo}</span>
      )}
      <div className="button">
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
