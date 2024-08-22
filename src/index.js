import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// 데이터를 (유일하게) 수정할 수 있는 함수
// state의 default 값 : 0
const countModifier = (count = 0, action) => {
  // if (action.type === 'ADD') {
  //   return count + 1;
  // } else if (action.type === 'MINUS') {
  //   return count - 1;
  // }
  // return count;

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const reducer = (state = [], action) => {
  console.log(action);
  
  switch(action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

// store: 데이터 저장하는 장소
const countStore = createStore(countModifier);

const store = createStore(reducer);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store에 변화가 있을 때마다 해당 function이 감지해서 불려짐.
countStore.subscribe(onChange);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

// action은 object여야함. (ex. { type: "ADD" })
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

form.addEventListener("submit", onSubmit);

// dispatch를 이용해 action 보내기
// countStore.dispatch({ type: "ADD" });

// console.log(countStore.getState());