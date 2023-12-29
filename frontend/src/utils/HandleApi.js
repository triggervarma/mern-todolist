import axios from "axios";

const baseURL = "http://localhost:5000";

const getAllToDo = (setTodo) => {
  axios.get(baseURL).then(({ data }) => {
    setTodo(data);
    console.log("data------>", data);
  });
};

const addToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseURL}/save`, { text })
    .then((res) => {
      console.log(res.data.status);
      setText("");
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err.message));
};

const updateToDo = (_id, text, setIsUpdating, setTodo, setText) => {
  axios
    .post(`${baseURL}/update`, { _id, text })
    .then((res) => {
      setIsUpdating(false);
      getAllToDo(setTodo);
      setText("");
    })
    .catch((err) => console.log(err.message));
};

const deleteToDo = (_id, setTodo) => {
  axios
    .post(`${baseURL}/delete`, { _id })
    .then((res) => {
      console.log(res.data.status);
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err.message));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
