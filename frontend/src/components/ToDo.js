import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { deleteToDo } from "../utils/HandleApi";

const ToDo = ({ id, text, setTodo, updateMode }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete
          className="icon"
          onClick={() => deleteToDo(id, setTodo)}
        />
      </div>
    </div>
  );
};

export default ToDo;
