import React from "react";
import Todoitem from "./Todoitem.js";
export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "50px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No todo to display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todoitem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            )
          })}
    </div>
  );
}
