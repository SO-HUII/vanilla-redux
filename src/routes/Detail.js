import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const toDos = useSelector(state => state);
  const todo = toDos.filter((todo) => todo.id === parseInt(id));

  return (
    <>
      <h1>{todo[0]?.text}</h1>
      <h5>Created at: {todo[0]?.id}</h5>
    </>
  );
}

// 이전방식
// function mapStateToProps(state, ownProps) {
//   const { match: { params: { id } } } = ownProps;
//   console.log(id);
//   return { toDos: state.find(toDo => toDo.id === parseInt(id)) };
// }

// export default connect(mapStateToProps)(Detail);

export default Detail;
