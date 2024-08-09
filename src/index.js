import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 데이터를 (유일하게) 수정할 수 있는 함수
// state의 default 값 : 0
const countModifier = (state = 0) => {
  return state;
};

// store: 데이터 저장하는 장소
const countStore = createStore(countModifier);
