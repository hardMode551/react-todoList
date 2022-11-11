import React from 'react';

const ToDo = ({ todo, toggleTask, deleteTask }) => {
  return (
    <div className="tasks">
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className="item-delete" onClick={() => deleteTask(todo.id)}>
        X
      </div>
    </div>
  );
};

export default ToDo;
