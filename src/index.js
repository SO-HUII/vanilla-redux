import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 데이터를 (유일하게) 수정할 수 있는 함수
// state의 default 값 : 0
const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  }
  return count;
};

// store: 데이터 저장하는 장소
const countStore = createStore(countModifier);

// dispatch를 이용해 action 보내기
countStore.dispatch({ type: "ADD" });

console.log(countStore.getState());