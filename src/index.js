// import { createStore } from 'redux';

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// // 데이터를 (유일하게) 수정할 수 있는 함수
// // state의 default 값 : 0
// const countModifier = (count = 0, action) => {
//   // if (action.type === 'ADD') {
//   //   return count + 1;
//   // } else if (action.type === 'MINUS') {
//   //   return count - 1;
//   // }
//   // return count;

//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const addToDo = text => {
//   // 공식문서에서는 reducer 안에서 Date.now()를 쓰지 않길 권장하고 있음.
//   // action에서 Date.now()를 쓰고, reducer로 값을 넘기도록 함.
//   return { type: ADD_TODO, text, id: Date.now() };
// };

// const deleteToDo = id => {
//   return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       const newToDoObj = { text: action.text, id: action.id };
//       // state mutate 절대 안됨.(read only) 
//       // 변형(수정)이 아니라 새로우 객체를 return 해야함.
//       return [newToDoObj, ...state];
//     case DELETE_TODO:
//       const cleaned = state.filter(toDo => toDo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// // store: 데이터 저장하는 장소
// const countStore = createStore(countModifier);

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const onChange = () => {
//   number.innerText = countStore.getState();
// };

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL"
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);  // li를 ul의 자식요소로 추가
//   });
// };

// store.subscribe(paintToDos);

// // store에 변화가 있을 때마다 해당 function이 감지해서 불려짐.
// countStore.subscribe(onChange);

// const dispatchAddToDo = text => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = e => {
//   // 지우고 싶은 li의 id
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id));
// };

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// // action은 object여야함. (ex. { type: "ADD" })
// add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// form.addEventListener("submit", onSubmit);

// // dispatch를 이용해 action 보내기
// // countStore.dispatch({ type: "ADD" });

// // console.log(countStore.getState());

// --------------------------------------------------------------

// React Redux
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);