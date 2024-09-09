import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

localStorage.setItem('toDos', JSON.stringify([]));

const reducer = (state = JSON.parse(localStorage.getItem("toDos")), action) => {
  switch (action.type) {
    case ADD:
      localStorage.setItem("toDos", JSON.stringify([{ text: action.text, id: Date.now() }, ...state]));
      return JSON.parse(localStorage.getItem("toDos"));
    case DELETE:
      localStorage.setItem("toDos", JSON.stringify(state.filter(toDo => toDo.id !== action.id)));
      return JSON.parse(localStorage.getItem("toDos"));
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;