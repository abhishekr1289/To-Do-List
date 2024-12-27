import React, { useState } from "react";

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState(" ");
    const [dsec, setdsec] = useState(" ");
    const Submit =(e) =>{
        e.preventDefault();
        if(!title || !dsec){
            alert("title and description cannot be blank");
      }
      else {
      addTodo(title,dsec);
      setTitle("");
      setdsec("");
      }
    }
    
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dsec" className="form-label">
            Todo Description
          </label>
          <input type="text" value={dsec} onChange={(e) => {setdsec(e.target.value)}} className="form-control" id="dsec" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          ADD TODO
        </button>
      </form>
    </div>
  );
}
