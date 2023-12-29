import { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  const updateMode = (todoId, text) => {
    setTodoId(todoId);
    setText(text);
    setIsUpdating(!isUpdating);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(todoId, text, setIsUpdating, setTodo, setText)
                : () => addToDo(text, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {todo?.map((element) => {
            return (
              <ToDo
                id={element._id}
                key={element._id}
                text={element.text}
                setIsUpdating={setIsUpdating}
                isUpdating={isUpdating}
                setTodo={setTodo}
                updateMode={() => updateMode(element._id, element.text)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
