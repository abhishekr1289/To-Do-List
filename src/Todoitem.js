import React from "react";

const Todoitem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.dsec}</p>
      <button
        className="btn btn-sm btn-danger "
        onClick={() => {
          onDelete(todo
            
          );
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Todoitem;
