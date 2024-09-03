import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");

  // useSelector는 getState와 같은 기능(store에서 정보를 가져옴). mapStateToProps의 대체재.
  // useDispatch는 mapDispatchToProps의 대체재.
  const toDo = useSelector(state => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(toDo)}
      </ul>
    </>
  );
}

// 이전 방법
// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text))
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;